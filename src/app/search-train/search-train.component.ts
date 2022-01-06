import { Component, OnInit } from '@angular/core';
import { Train } from '../train';
import { TrainService } from '../train.service';

@Component({
  selector: 'app-search-train',
  templateUrl: './search-train.component.html',
  styleUrls: ['./search-train.component.css']
})
export class SearchTrainComponent implements OnInit {
  trains: Train[] = [];

  constructor(private trainService: TrainService ) { }

  ngOnInit(): void {
    this.getTrain();
  }
  private getTrain(){
    this.trainService.getTrainList().subscribe(data => {
      this.trains= data;
    });
  }

}
