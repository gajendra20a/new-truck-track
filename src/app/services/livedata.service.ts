import { LastRunningState, LastWaypoint } from './../models/dataApi';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Datum, RootObject } from '../models/interfaceAPI';

const url = 'http://13.232.181.67:8080/tt/mobile/logistics/searchTrucks?auth-company=pbh&companyId=101&key=bmked1lou9ome2veh2jirgih5s&q-expand=true&q-include=lastWaypoint,lastRunningState,drivers,truckType'

export const truckStatus = {
  total: 'Total',
  running: 'Running',
  stopped: 'Stopped',
  idle: 'Idle',
  error: 'Error'
}

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {

  constructor(private http: HttpClient) { }

  get truckData$(): Observable<RootObject>{
    return this.http.get(url) as Observable<RootObject>;
  }

  public getTruckData(truck: Datum): string {
    const truckRunning = truck.lastRunningState.truckRunningState;
    const isIgnitionOn = truck.lastWaypoint.ignitionOn;

    if (truckRunning){
      return truckStatus.running;
    }
    else if (isIgnitionOn && !truckRunning){
      return truckStatus.idle;
    }
    else {
      return truckStatus.stopped;
    }
  }
}
