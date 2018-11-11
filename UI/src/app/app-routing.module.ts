import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from "./components/people/people.component";
import {HomeComponent} from "./components/home/home.component";
import {ClientsComponent} from "./components/clients/clients.component";
import {CreatePersonComponent} from "./components/people/create-person/create-person.component";
import {EditPersonComponent} from "./components/people/edit-person/edit-person.component";
import {DeletePersonComponent} from "./components/people/delete-person/delete-person.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'people', component: PeopleComponent },
  { path: 'create-person', component: CreatePersonComponent },
  { path: 'edit-person/:id', component: EditPersonComponent },
  { path: 'delete-person', component: DeletePersonComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
