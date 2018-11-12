import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidationErrorService} from "../../../services/ValidationErrorService";
import {ClientService} from "../../../services/client.service";


@Component({
  selector: 'app-create-client',
  templateUrl: './create-client.component.html',
  styleUrls: ['./create-client.component.scss']
})
export class CreateClientComponent implements OnInit {

  createClientForm: FormGroup;
  validMessage: string = "";
  errors: string[] = [];
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
  dataReceived: boolean = true;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.createClientForm = new FormGroup({
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
      ])
    });
  }

  submitCreateClientForm() {
    if(this.createClientForm.valid) {
      this.dataReceived = false;
      this.clientService.createClient(this.createClientForm.value).subscribe(
        data => {
          this.dataReceived = true;
          this.validMessage = this.createClientForm.value['companyName'] + ' created successfully.';
          this.errors = [];
          this.createClientForm.reset();
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
      this.errors = ValidationErrorService.getValidationErrors(this.createClientForm, this.properNames);
    }
  }

}

