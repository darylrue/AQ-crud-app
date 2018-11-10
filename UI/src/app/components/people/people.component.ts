import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../services/people.service";


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss'],

})
export class PeopleComponent implements OnInit {

  people;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.getPeople();
    // this.people = []; //to test the 'No Results Found' message
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(
      data => this.people = data,
      err => console.error(err),
      () => console.log('people populated.')
    );
  }

}
