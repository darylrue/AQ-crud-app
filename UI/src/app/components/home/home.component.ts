import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../services/people.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private peopleService: PeopleService, private router: Router) { }

  ngOnInit() {
  }

  navToPeople() {
    this.router.navigate(['/people']);
  }

  navToClients() {
    this.router.navigate(['/clients']);
  }
}
