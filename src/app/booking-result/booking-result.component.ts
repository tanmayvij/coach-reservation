import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking-result',
  templateUrl: './booking-result.component.html',
  styleUrls: ['./booking-result.component.css']
})
export class BookingResultComponent implements OnInit {
  @Input() results: any;

  constructor() { }

  ngOnInit(): void {
  }

}
