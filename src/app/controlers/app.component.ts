import { Component, OnInit } from '@angular/core';
import { Datum } from './../models/interfaceAPI';
import { LiveDataService } from './../services/livedata.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'new-truck';
  public totalTrucks: Datum[] = [];
  public filteredTrucks: Datum[] = [];

  constructor(private livedataService: LiveDataService){}

  ngOnInit(){
    this.livedataService.truckData$.subscribe((data) => {
      this.totalTrucks = data.data;
      this.filteredTrucks = this.totalTrucks;
    });
  }
}
