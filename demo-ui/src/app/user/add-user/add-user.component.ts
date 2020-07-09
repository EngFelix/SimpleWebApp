import {Component, OnInit} from '@angular/core';
import {User} from '../../data/models/user.model';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'modal-content',
  templateUrl: './add-user.component.html'
})
export class AddUserComponent implements OnInit {
  userModel: User ;
  close: () => {};
  saveUser: (user: User) => {};
  buttonText: string;

  userForm: FormGroup;
  nameMinLength = 2;
  intNamePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;

  constructor(public modalRef: BsModalRef) {
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      'firstName': new FormControl(this.userModel.firstName, [
        Validators.required,
        Validators.pattern(this.intNamePattern),
        Validators.minLength(this.nameMinLength)
      ]),
      'lastName': new FormControl(this.userModel.lastName, [
        Validators.required,
        Validators.pattern(this.intNamePattern),
        Validators.minLength(this.nameMinLength)
      ]),
      'birthDate': new FormControl(this.userModel.birthDate)
    });
  }

  logErrors() {
    console.log(this.userForm.errors);
  }

  get firstName() {
    return this.userForm.get('firstName');
  }

  get lastName() {
    return this.userForm.get('lastName');
  }

  get birthDate() {
    return this.userForm.get('birthDate');
  }

  showError(formControl: AbstractControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }
}
