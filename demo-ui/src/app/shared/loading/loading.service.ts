import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {concatMap, finalize, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loadingSubject = new BehaviorSubject<boolean>(false);

  loading$ = this.loadingSubject.asObservable();

  constructor() {
    console.log('Created loading service');
  }

  showLoaderUntilComplete<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingSubject.next(true)),
        concatMap(() => obs$),
        finalize(() => this.loadingSubject.next(false))
      );
  }
}
