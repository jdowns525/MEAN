import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripCardComponent } from './trip-card/trip-card.component';
import { TripFormComponent } from './trip-form/trip-form.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,


    AppComponent,
    TripListComponent,
    TripCardComponent,
    TripFormComponent,
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}



