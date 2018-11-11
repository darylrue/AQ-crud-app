import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PeopleService} from "../../../services/people.service";
import {ActivatedRoute} from "@angular/router";
import {ValidationErrorService} from "../../../services/ValidationErrorService";

@Component({
  selector: 'app-edit-person',
  templateUrl: './edit-person.component.html',
  styleUrls: ['./edit-person.component.scss']
})
export class EditPersonComponent implements OnInit {

  editPersonForm: FormGroup;
  validMessage: string = '';
  errors: string[] = [];
  submitted: boolean = false;
  readonly properNames: { [key: string]: string; } = {
    'firstName': 'First Name',
    'lastName' : 'Last Name',
    'emailAddress': 'Email Address',
    'streetAddress': 'Street Address',
    'city': 'City',
    'state': 'State',
    'zipCode': 'Zip code'
  };
  dataReceived: boolean = false;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPerson(this.route.snapshot.params.id);
    this.editPersonForm = new FormGroup({
      personId: new FormControl(''),
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      emailAddress: new FormControl('', Validators.required),
      streetAddress: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      zipCode: new FormControl('', Validators.required)
    });
  }

  getPerson(id: number) {
    this.peopleService.getPerson(id).subscribe(
      data => {
        this.dataReceived = true;
        let person = <any>data;
        this.editPersonForm.patchValue({
          personId: person.personId,
          firstName: person.firstName,
          lastName: person.lastName,
          emailAddress: person.emailAddress,
          streetAddress: person.streetAddress,
          city: person.city,
          state: person.state,
          zipCode: person.zipCode
        });
      },
      err => {
        this.dataReceived = true;
        console.error(err);
      },
    () => { console.log('person populated.'); }
    );
  }

  submitEditPersonForm() {
    if(this.editPersonForm.valid) {
      this.peopleService.editPerson(this.editPersonForm.value).subscribe(
        data => {
          this.validMessage = 'Your changes have been saved.';
          this.errors = [];
          this.submitted = true;
          return true;
        },
        err => {
          console.error(err);
          this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
            'Please call support at 555-555-5555 for assistance.';
        },
        () => { console.log('form submission complete.') }
      );
    } else {
      this.validMessage = 'Please correct the following errors before submitting:';
      this.errors = ValidationErrorService.getValidationErrors(this.editPersonForm, this.properNames);
    }
  }

}
