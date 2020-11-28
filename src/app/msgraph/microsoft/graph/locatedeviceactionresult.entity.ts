﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceGeoLocation } from './devicegeolocation.entity';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceGeoLocationModel } from './devicegeolocation.model';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
import { DeviceGeoLocationCollection } from './devicegeolocation.collection';
//#endregion

export interface LocateDeviceActionResult extends DeviceActionResult {
  //#region ODataApi Properties
  deviceLocation?: DeviceGeoLocation;
  //#endregion
}