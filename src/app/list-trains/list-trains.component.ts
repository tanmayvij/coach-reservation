import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-list-trains',
  templateUrl: './list-trains.component.html',
  styleUrls: ['./list-trains.component.css']
})
export class ListTrainsComponent implements OnInit {

  trains: any;
  loading = true;
  error = false;

  constructor(private trainService: TrainService, private router: Router) { }

  ngOnInit(): void {
    this.trainService.getTrains().subscribe((res: any) => {
      this.loading = false;
      if (res.success) {
        this.trains = res.data;
      }
      else {
        this.trains = [];
      }
    }, (error: any) => {
      this.loading = false;
      this.error = true;
      this.trains = [];
    });
  }

  book(id: number): void {
    this.router.navigateByUrl('/book?id=' + id);
  }

}
