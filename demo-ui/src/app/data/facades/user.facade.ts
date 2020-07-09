import {User} from '../models/user.model';
import {Injectable} from '@angular/core';
import {BehaviorSubject, combineLatest, Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map, observeOn, switchMap, tap} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {FormControl} from '@angular/forms';


// Facade pattern by @ThomasBurleson url: https://stackblitz.com/edit/facades-with-rxjs-only


export interface Loadable {
  loading: boolean
}

// export interface State<T>{
//   data: T[];
// }

export interface Pagination {
  selectedSize: number;
  currentPage: number;
  pageSizes: number[];
}

export interface UserState extends Loadable {
  users: User[],
  criteria: string,
  pagination: Pagination
}


let _state: UserState = {
  users: [],
  criteria: '',
  pagination: {
    currentPage: 0,
    selectedSize: 10,
    pageSizes: [5, 10, 20, 50]
  },
  loading: false
};

@Injectable()
export class UserFacade {
  private store = new BehaviorSubject<UserState>(_state);
  private state$ = this.store.asObservable();

  users$ = this.state$.pipe(
    map(state => state.users),
    distinctUntilChanged()
  );
  criteria$ = this.state$.pipe(
    map(state => state.criteria),
    distinctUntilChanged()
  );
  pagination$ = this.state$.pipe(
    map(state => state.pagination),
    distinctUntilChanged()
  );
  loading$ = this.state$.pipe(
    map(state => state.loading)
  );

  viewModel$: Observable<UserState> = combineLatest([this.users$, this.criteria$, this.pagination$, this.loading$])
    .pipe(
      map(([users, criteria, pagination, loading]) => {
        return {users, criteria, pagination, loading};
      })
    );

  constructor(private http: HttpClient) {
    combineLatest([this.criteria$, this.pagination$]).pipe(
      switchMap(([criteria, pagination]) => {
        return this.findAllUsers(criteria, pagination);
      })
    ).subscribe(users => {
      console.log('received all users');
      console.log(users);
      this.updateState({..._state, users, loading: false});
    });
  }

  // Facade API Public methods --------------------------------

  // Use this function to initialize a component in ngOnInit()
  getStateSnapshot(): UserState {
    return {..._state, pagination: {..._state.pagination}};
  }

  buildSearchTermControl(): FormControl {
    const searchTerm = new FormControl();
    searchTerm.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
    ).subscribe(value => this.updateSearchCriteria(value));

    return searchTerm;
  }

  updateSearchCriteria(criteria: string) {
    this.updateState({..._state, criteria, loading: true});
  }

  updatePagination(selectedSize: number, currentPage: number = 0){
    const pagination = {..._state.pagination, currentPage, selectedSize};
    this.updateState({..._state, pagination, loading: true});
  }

  //------------ PRIVATE -----------------------------------------

  private updateState(state: UserState) {
    this.store.next(_state = state);
  }

  private findAllUsers(criteria: string, pagination: Pagination): Observable<User[]> {
    const url = buildUserUrl(criteria, pagination);
    return this.http.get<User[]>(url);
  }
}

function buildUserUrl(criteria: string, pagination: Pagination): string {
  const URL = 'http://localhost:8080/api/users';
  const currentPage = `page=${pagination.currentPage}`;
  const pageSize = `results=${pagination.selectedSize}`;
  const searchFor = `seed=${criteria}`

  return `${URL}?${searchFor}&${pageSize}&${currentPage}` //TODO: implement pagination and searching on backend

}
