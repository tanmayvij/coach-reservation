import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-booking-result',
  templateUrl: './booking-result.component.html',
  styleUrls: ['./booking-result.component.css']
})
export class BookingResultComponent implements OnInit {
  @Input() results: any;
  status: any;

  constructor(private trainService: TrainService) { }

  ngOnInit(): void {
    this.status = this.trainService.getStatus(this.results.train.available, this.results.train.booked);
  }

  back(): void {
    window.location.reload();
  }

}
