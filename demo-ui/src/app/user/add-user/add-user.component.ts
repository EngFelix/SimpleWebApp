import {Component, OnInit} from '@angular/core';
import {User} from '../../model/user.model';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'modal-content',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  userModel: User = new User();
  close: () => {};
  saveUser: (user: User) => {};
  buttonText: string;

  userForm: FormGroup;

  constructor(public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstName': new FormControl(this.userModel.firstName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      'lastName': new FormControl(this.userModel.lastName, [
        Validators.required,
        Validators.minLength(2)
      ]),
      'birthDate': new FormControl(this.userModel.birthDate)
    });
  }

  get firstName() {return this.userForm.get('firstName'); }
  get lastName() {return this.userForm.get('lastName'); }
  get birthDate() {return this.userForm.get('birthDate'); }
}
