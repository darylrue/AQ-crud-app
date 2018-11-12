import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationErrorService} from "../../../services/ValidationErrorService";


@Component({
  selector: 'app-create-person',
  templateUrl: './create-person.component.html',
  styleUrls: ['./create-person.component.scss']
})
export class CreatePersonComponent implements OnInit {

  createPersonForm: FormGroup;
  validMessage: string = "";
  errors: string[] = [];
  readonly properNames: { [key: string]: string; } = {
    'firstName': 'First Name',
    'lastName' : 'Last Name',
    'emailAddress': 'Email Address',
    'streetAddress': 'Street Address',
    'city': 'City',
    'state': 'State',
    'zipCode': 'Zip code'
  };
  dataReceived: boolean = true;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.createPersonForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      emailAddress: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      streetAddress: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      city: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      state: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ]),
      zipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ])
    });
  }

  submitCreatePersonForm() {
    if(this.createPersonForm.valid) {
      this.dataReceived = false;
      this.peopleService.createPerson(this.createPersonForm.value).subscribe(
        data => {
          this.dataReceived = true;
          this.validMessage = this.createPersonForm.value['firstName'] + ' created successfully.';
          this.errors = [];
          this.createPersonForm.reset();
          return true;
        },
        err => {
          this.dataReceived = true;
          console.error(err);
          this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
            'Please call support at 555-555-5555 for assistance.';
        },
        () => { console.log('form submission complete.') }
      );
    } else {
      this.validMessage = 'Please correct the following errors before submitting:';
      this.errors = ValidationErrorService.getValidationErrors(this.createPersonForm, this.properNames);
    }
  }

}
