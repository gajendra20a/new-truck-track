import { Datum } from './../../models/interfaceAPI';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { LiveDataService, truckStatus } from './../../services/livedata.service';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent {
  @Input() set totalTrucks(totalTrucks: Datum[]){
    this.totalTrucksFromInput = totalTrucks;
    this.setTruckCount();
  }

  @Output() displayTruckType = new EventEmitter<string>();

  public totalTrucksFromInput: Datum[] = [];
  public allTrucks: number;
  public runningTrucks: number;
  public stoppedTrucks: number;
  public idleTrucks: number;
  public errorTrucks: number;

  constructor(private liveDataService: LiveDataService){ }

  private setTruckCount() {
    this.allTrucks = this.totalTrucksFromInput.length;
    this.runningTrucks = 0;
    this.stoppedTrucks = 0;
    this.idleTrucks = 0;
    this.totalTrucksFromInput.forEach((truck) => {
      switch (this.liveDataService.getTruckData(truck)) {
        case truckStatus.running:
          this.runningTrucks++;
          break;
        case truckStatus.stopped:
          this.stoppedTrucks++;
          break;
        case truckStatus.idle:
          this.idleTrucks++;
          break;
      }
    });
  }

  public displayAllTrucks() {
    this.displayTruckType.emit(truckStatus.total);
  }

  public displayRunningTrucks() {
    this.displayTruckType.emit(truckStatus.running);
  }

  public displayStoppedTrucks() {
    this.displayTruckType.emit(truckStatus.stopped);
  }

  public displayIdleTrucks() {
    this.displayTruckType.emit(truckStatus.idle);
  }
}
