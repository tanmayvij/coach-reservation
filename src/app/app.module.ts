import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListTrainsComponent } from './list-trains/list-trains.component';
import { ErrorComponent } from './error/error.component';
import { BookComponent } from './book/book.component';
import { BookingResultComponent } from './booking-result/booking-result.component';

@NgModule({
  declarations: [
    AppComponent,
    ListTrainsComponent,
    ErrorComponent,
    BookComponent,
    BookingResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
