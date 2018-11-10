import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PeopleComponent} from "./components/people/people.component";
import {HomeComponent} from "./components/home/home.component";
import {ClientsComponent} from "./components/clients/clients.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'people', component: PeopleComponent },
  { path: 'clients', component: ClientsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
