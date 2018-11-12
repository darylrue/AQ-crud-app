import { Component, OnInit } from '@angular/core';
import {ClientService} from "../../services/client.service";


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],

})
export class ClientsComponent implements OnInit {

  clients;
  columnsToDisplay = ['companyName', 'websiteUri', 'phone', 'physCity', 'physState', 'contacts', 'actions'];
  dataReceived: boolean = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    this.getClients();
    // this.mockNoResults(); //to test the 'No Results Found' message
  }

  getClients() {
    this.clientService.getClients().subscribe(
      data => {
        this.clients = data;
        this.dataReceived = true;
        },
      err => {
        this.dataReceived = true;
        console.error(err)
      },
      () => console.log('clients populated.')
    );
  }

  mockNoResults() {
    this.clients = [];
    this.dataReceived = true;
  }

}
