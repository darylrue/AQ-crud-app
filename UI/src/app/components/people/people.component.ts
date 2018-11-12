import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../services/people.service";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],

})
export class PeopleComponent implements OnInit {

  people;
  dataReceived: boolean = false;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
    // this.mockNoResults(); //to test the 'No Results Found' message
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      data => {
        this.people = data;
        this.dataReceived = true;
        },
      err => {
        this.dataReceived = true;
        console.error(err)
      },
      () => console.log('people populated.')
    );
  }

  mockNoResults() {
    this.people = [];
    this.dataReceived = true;
  }

}
