import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {PeopleService} from "../../../services/people.service";
import {ActivatedRoute} from "@angular/router";
import {ValidationErrorService} from "../../../services/ValidationErrorService";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.scss']
})
export class EditClientComponent implements OnInit {

  editClientForm: FormGroup;
  validMessage: string = '';
  errors: string[] = [];
  submitted: boolean = false;
  readonly properNames: { [key: string]: string; } = {
    'companyName': 'Company name',
    'websiteUri' : 'Website URI',
    'phone': 'Phone',
    'physStreet': 'Physical street address',
    'physCity': 'Physical city',
    'physState': 'Physical state',
    'physZipCode': 'Physical zip code',
    'mailStreet': 'Mailing street address',
    'mailCity': 'Mailing city',
    'mailState': 'Mailing state',
    'mailZipCode': 'Mailing zip code'
  };
  people: any[] = [];
  peopleReceived: boolean = false;
  clientReceived: boolean = false;

  constructor(private peopleService: PeopleService, private clientService: ClientService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getClient(this.route.snapshot.params.id);
    this.getPeople();
    this.editClientForm = new FormGroup({
      companyId: new FormControl(''),
      companyName: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      websiteUri: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      phone: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      physStreet: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      physCity: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      physState: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ]),
      physZipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      mailStreet: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      mailCity: new FormControl('', [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(50)
      ]),
      mailState: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(2)
      ]),
      mailZipCode: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(5)
      ]),
      contacts: new FormControl(null)
    });
  }

  getClient(id: number) {
    this.clientService.getClient(id).subscribe(
      data => {
        let client = <any>data;
        this.editClientForm.patchValue({
          companyId: client.companyId,
          companyName: client.companyName,
          websiteUri: client.websiteUri,
          phone: client.phone,
          physStreet: client.physStreet,
          physCity: client.physCity,
          physState: client.physState,
          physZipCode: client.physZipCode,
          mailStreet: client.mailStreet,
          mailCity: client.mailCity,
          mailState: client.mailState,
          mailZipCode: client.mailZipCode,
          contacts: client.contacts
        });
        this.clientReceived = true;
      },
      err => {
        console.error(err);
        this.clientReceived = true;
      },
      () => {
        console.log('client populated.');
      }
    );
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      data => {
        this.people = <any>data;
        this.peopleReceived = true;
      },
      err => {
        console.log(err);
        this.peopleReceived = true;
      },
      () => {
        console.log('people populated');
      }
    );
  }

  submitEditClientForm() {
    if(this.editClientForm.valid) {
      this.clientReceived = false; //start progress indicator
      this.clientService.editClient(this.editClientForm.value).subscribe(
        data => {
          this.validMessage = 'Your changes have been saved.';
          this.errors = [];
          this.submitted = true;
          this.clientReceived = true; //stop progress indicator
          return true;
        },
        err => {
          console.error(err);
          this.validMessage = 'Uh oh. We are having trouble submitting the form. ' +
            'Please call support at 555-555-5555 for assistance.';
          this.clientReceived = true; //stop progress indicator
        },
        () => { console.log('form submission complete.') }
      );
    } else {
      this.validMessage = 'Please correct the following errors before submitting:';
      this.errors = ValidationErrorService.getValidationErrors(this.editClientForm, this.properNames);
    }
  }

  equals(person1, person2) {
    if(person1 === null && person2 === null) return true;
    if(!(person1 && person2)) return false;
    return person1.companyId === person2.companyId;
  }

}

