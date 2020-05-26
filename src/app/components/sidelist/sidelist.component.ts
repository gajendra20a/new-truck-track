import { Component, Input } from '@angular/core';
import { Datum } from './../../models/interfaceAPI';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-sidelist',
  templateUrl: './sidelist.component.html',
  styleUrls: ['./sidelist.component.css']
})
export class SidelistComponent {
  @Input() set totalTrucks(totalTrucks: Datum[]){
    this.totalTrucksFromInput = totalTrucks;
    this.truckChanged();
  }

  public totalTrucksFromInput: Datum[] = [];
  public truckList: Datum[] = [];
  public input = new FormControl('');

  public truckChanged(){
    const inputData = this.input.value;
    if(inputData === ''){
      this.truckList = this.totalTrucksFromInput;
    } else {
      this.truckList = this.totalTrucksFromInput.filter(truck => {
        return truck.truckNumber.indexOf(inputData) >= 0;
      })
    }
  }

}
