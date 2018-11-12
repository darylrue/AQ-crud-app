import { Component, OnInit } from '@angular/core';
import {PeopleService} from "../../../services/people.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ClientService} from "../../../services/client.service";

@Component({
  selector: 'app-delete-client',
  templateUrl: './delete-client.component.html',
  styleUrls: ['./delete-client.component.scss']
})
export class DeleteClientComponent implements OnInit {

  id: number;
  companyName: string;
  responseMsg: string = '';
  success: boolean = false;
  dataReceived: boolean = false;

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit() {
    let params = this.route.snapshot.queryParams;
    this.id = params.id;
    this.companyName = params.companyName;
    this.getClient(this.id);
  }

  getClient(id: number) {
    this.clientService.getClient(id).subscribe(
      data => { this.dataReceived = true },
      err => {
        this.dataReceived = true;
        this.responseMsg = `Client ${this.companyName} not found.`;
      },
      () => {
        console.log('client populated.');
      }
    );
  }

  delete() {
    this.dataReceived = false;
    this.clientService.deleteClient(this.id).subscribe(
      data => {
        this.responseMsg = `Client ${this.companyName} 
            has been successfully deleted.`;
        this.success = true;
        this.dataReceived = true;
      },
      err => {
        this.responseMsg = `Client ${this.companyName}
            not found.`;
        this.dataReceived = true;
      },
      () => { console.log('delete request complete.'); }
    );
  }

}

