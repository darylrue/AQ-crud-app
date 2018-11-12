import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-delete-person',
  templateUrl: './delete-person.component.html',
  styleUrls: ['./delete-person.component.scss']
})
export class DeletePersonComponent implements OnInit {

  id: number;
  firstName: string;
  lastName: string;
  responseMsg: string = '';
  success: boolean = false;
  dataReceived: boolean = false;

  constructor(private peopleService: PeopleService, private route: ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.queryParams;
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.getPerson(this.id);
  }

  getPerson(id: number) {
    this.peopleService.getPerson(id).subscribe(
      data => { this.dataReceived = true },
      err => {
        this.dataReceived = true;
        this.responseMsg = `Person ${this.firstName} ${this.lastName}
            not found.`;
      },
      () => {
        console.log('person populated.');
      }
    );
  }

  delete() {
    this.dataReceived = false;
    this.peopleService.deletePerson(this.id).subscribe(
      data => {
          this.responseMsg = `Person ${this.firstName} ${this.lastName} 
            has been successfully deleted.`;
          this.success = true;
          this.dataReceived = true;
        },
      err => {
          this.responseMsg = `Person ${this.firstName} ${this.lastName}
            not found.`;
          this.dataReceived = true;
      },
      () => { console.log('delete request complete.'); }
    );
  }

}
