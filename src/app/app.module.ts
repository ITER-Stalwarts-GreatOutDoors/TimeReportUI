import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShelftimereportComponent } from './shelftimereport/shelftimereport.component';
import { DeliverytimereportComponent } from './deliverytimereport/deliverytimereport.component';

@NgModule({
  declarations: [
    AppComponent,
    ShelftimereportComponent,
    DeliverytimereportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
