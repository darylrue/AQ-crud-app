import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {PeopleService} from "./services/people.service";
import {HttpClientModule} from "@angular/common/http";
import { PeopleComponent } from './components/people/people.component';
import { HomeComponent } from './components/home/home.component';
import { ClientsComponent } from './components/clients/clients.component';
import { CreatePersonComponent } from './components/people/create-person/create-person.component';
import {ReactiveFormsModule} from "@angular/forms";
import { EditPersonComponent } from './components/people/edit-person/edit-person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    HomeComponent,
    ClientsComponent,
    CreatePersonComponent,
    EditPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
