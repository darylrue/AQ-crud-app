import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const domain: string = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get(`${domain}/api/client/list`);
  }

  getClient(id: number) {
    return this.http.get(`${domain}/api/client/${id}`);
  }

  createClient(client) {
    let body = JSON.stringify(client);
    return this.http.post(`${domain}/api/client/create`, body, httpOptions);
  }

  editClient(client) {
    let body = JSON.stringify(client);
    return this.http.put(`${domain}/api/client/edit`, body, httpOptions);
  }

  deleteClient(id: number) {
    return this.http.delete(`${domain}/api/client/${id}`);
  }
}
