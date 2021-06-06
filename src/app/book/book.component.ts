import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  error = '';
  loading = true;
  bookLoading = false;
  id: any;
  train: any;
  seats: any = [];
  selected = 1;
  results: any;

  constructor(activatedRoute: ActivatedRoute, private trainService: TrainService) {
    if (!activatedRoute.snapshot.queryParams.id) {
      this.loading = false;
      this.error = 'Please specify train ID.';
    }
    else {
      this.id = activatedRoute.snapshot.queryParams.id;
    }
  }

  ngOnInit(): void {
    if(this.id) {
      this.trainService.getTrain(this.id).subscribe((res: any) => {
        this.loading = false;
        if (res.success) {
          this.train = res.data;
          this.seats = this.trainService.getStatus(this.train.available, this.train.booked); // Calculate current status of seats
        }
        else {
          this.error = 'The specified train does not exist.';
        }
      }, (err: any) => {
        this.loading = false;
        this.error = 'The specified train does not exist.';
      });
    }
  }

  increment(): void {
    this.selected++;
  }

  decrement(): void {
    this.selected--;
  }

  book(): void {
    this.bookLoading = true;
    this.trainService.bookTrain(this.id, this.selected).subscribe((res: any) => {
      this.bookLoading = false;
      if (res.success) {
        this.ngOnInit();
        this.results = res.data;
      }
      else {
        this.error = res.data;
      }
    }, (err: any) => {
      this.bookLoading = false;
      this.error = err.error.data;
    });
  }

}
