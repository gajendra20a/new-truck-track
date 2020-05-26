import { Component } from '@angular/core';
import { Datum } from './../models/interfaceAPI';
import { LiveDataService, truckStatus } from './../services/livedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  public totalTrucks: Datum[] = [];
  public filteredTrucks: Datum[] = [];

  constructor(private livedataService: LiveDataService){}

  ngOnInit() {
    this.livedataService.truckData$.subscribe((data) => {
      this.totalTrucks = data.data;
      this.filteredTrucks = this.totalTrucks;
    });
  }

  public selectedTruckType(event){
    let truckList: Datum[] = [];
    let truckState: string;
    if (event === truckStatus.total){
      truckList = this.totalTrucks;
    }
    else {
      this.totalTrucks.filter(truck => {
        truckState = this.livedataService.getTruckData(truck);
        if(event === truckState){
          truckList = [...truckList, ...[truck]];
        }
      });
    }
    this.filteredTrucks = truckList;
  }
}
