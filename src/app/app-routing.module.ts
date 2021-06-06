import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookComponent } from './book/book.component';
import { ErrorComponent } from './error/error.component';
import { ListTrainsComponent } from './list-trains/list-trains.component';

const routes: Routes = [
  { path: '', component: ListTrainsComponent },
  { path: 'book', component: BookComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
