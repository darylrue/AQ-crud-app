import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const domain: string = 'http://localhost:8080';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeople() {
    return this.http.get(`${domain}/api/person/list`);
  }

  getPerson(id: number) {
    return this.http.get(`${domain}/api/person/${id}`);
  }

  createPerson(person) {
    let body = JSON.stringify(person);
    return this.http.post(`${domain}/api/person/create`, body, httpOptions);
  }

  editPerson(person) {
    let body = JSON.stringify(person);
    return this.http.put(`${domain}/api/person/edit`, body, httpOptions);
  }

  deletePerson(id: number) {
    return this.http.delete(`${domain}/api/person/${id}`);
  }
}
