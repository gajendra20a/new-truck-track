import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RootObject } from '../models/interfaceAPI';

const url = 'http://13.232.181.67:8080/tt/mobile/logistics/searchTrucks?auth-company=pbh&companyId=101&key=bmked1lou9ome2veh2jirgih5s&q-expand=true&q-include=lastWaypoint,lastRunningState,drivers,truckType'

@Injectable({
  providedIn: 'root'
})
export class LiveDataService {

  constructor(private http: HttpClient) { }

  get truckData$(): Observable<RootObject>{
    return this.http.get(url) as Observable<RootObject>;
  }
}
