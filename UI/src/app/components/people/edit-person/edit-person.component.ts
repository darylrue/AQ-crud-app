import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PeopleService} from "../../../services/people.service";
import {ActivatedRoute} from "@angular/router";
import {ValidationErrorService} from "../../../services/ValidationErrorService";
import {ClientService} from "../../../services/client.service";

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
  clients: any[] = [];
  personReceived: boolean = false;
  clientsReceived: boolean = false;

  constructor(private peopleService: PeopleService, private clientService: ClientService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPerson(this.route.snapshot.params.id);
    this.getClients();
    this.editPersonForm = new FormGroup({
      personId: new FormControl(''),
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
      ]),
      client: new FormControl(null)
    });
  }

  getPerson(id: number) {
    this.peopleService.getPerson(id).subscribe(
      data => {
        let person = <any>data;
        this.editPersonForm.patchValue({
          personId: person.personId,
          firstName: person.firstName,
          lastName: person.lastName,
          emailAddress: person.emailAddress,
          streetAddress: person.streetAddress,
          city: person.city,
          state: person.state,
          zipCode: person.zipCode,
          client: person.client
        });
        this.personReceived = true;
      },
      err => {
        console.error(err);
        this.personReceived = true;
      },
    () => {
        console.log('person populated.');
      }
    );
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = <any>data;
        this.clientsReceived = true;
      },
      err => {
        console.log(err);
        this.clientsReceived = true;
      },
      () => {
        console.log('clients populated');
      }
    );
  }

  submitEditPersonForm() {
    if(this.editPersonForm.valid) {
      this.clientsReceived = false; //to show the progress indicator
      this.peopleService.editPerson(this.editPersonForm.value).subscribe(
        data => {
          this.validMessage = 'Your changes have been saved.';
          this.errors = [];
          this.submitted = true;
          this.clientsReceived = true; //stop the progress indicator
          return true;
        },
        err => {
          console.error(err);
          this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
            'Please call support at 555-555-5555 for assistance.';
          this.clientsReceived = true; //stop the progress indicator
        },
        () => { console.log('form submission complete.') }
      );
    } else {
      this.validMessage = 'Please correct the following errors before submitting:';
      this.errors = ValidationErrorService.getValidationErrors(this.editPersonForm, this.properNames);
    }
  }

  equals(item1, item2) {
    return item1 && item2 ? item1.companyId === item2.companyId : item1 === item2;
  }

}
