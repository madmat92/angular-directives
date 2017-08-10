import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { ListingComponent } from './listing.component';
import { List2Component } from './list2.component';
import { SurlignageDirective } from './surlignage.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    List2Component,
    SurlignageDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
