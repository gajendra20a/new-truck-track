export interface ResponseCode {
  responseCode: number;
  message: string;
}

export interface LastWaypoint {
  id: number;
  lat: number;
  lng: number;
  createTime: number;
  accuracy: number;
  bearing: number;
  truckId: number;
  speed: number;
  updateTime: any;
  ignitionOn: boolean;
  odometerReading: number;
  batteryPower: boolean;
  fuelLevel: number;
  batteryLevel: number;
}

export interface LastRunningState {
  truckId: number;
  stopStartTime: number;
  truckRunningState: number;
  lat: number;
  lng: number;
  stopNotficationSent: number;
}

export interface TruckType {
  id: number;
  type: string;
  companyId: number;
}

export interface TruckSize {
  id: number;
  size: string;
  truckTypeId: number;
}

export interface Driver {
  id: number;
  name: string;
  mobileNumber: string;
  companyId: number;
  createTime: any;
  deactivated: boolean;
  external: boolean;
  deactivateColumn: string;
  idColumn: string;
}

export interface Datum {
  id: number;
  companyId: number;
  truckTypeId: number;
  truckSizeId: number;
  truckNumber: string;
  transporterId: number;
  trackerType: number;
  name: string;
  password: string;
  createTime: any;
  deactivated: boolean;
  durationInsideSite: number;
  fuelSensorInstalled: boolean;
  externalTruck: boolean;
  imeiNumber: string;
  simNumber: string;
  lastWaypoint: LastWaypoint;
  lastRunningState: LastRunningState;
  truckType: TruckType;
  truckSize: TruckSize;
  drivers: Driver[];
}

export interface RootObject {
  responseCode: ResponseCode;
  data: Datum[];
}