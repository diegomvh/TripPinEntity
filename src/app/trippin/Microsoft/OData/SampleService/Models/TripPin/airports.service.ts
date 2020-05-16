﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, ODataValueAnnotations, ODataEntityResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { AirportLocation } from './airportlocation.entity';
import { Airport } from './airport.entity';
//#endregion

@Injectable()
export class AirportsService extends ODataEntityService<Airport> {
  static path: string = 'Airports';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airports';
  static entity: string = 'Microsoft.OData.SampleService.Models.TripPin.Airport';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public getNearestAirport(lat: number, lon: number, options?: HttpOptions): Observable<[Airport, ODataEntityAnnotations]> {
    let args = Object.entries({
        lat: lat, 
        lon: lon
      })
      .filter(pair => pair[1] !== null)
      .reduce((acc, val) => (acc[val[0]] = val[1], acc), {});
    var res = this.client.function<Airport>('GetNearestAirport', 'Microsoft.OData.SampleService.Models.TripPin.Airport');
    return res.call(args, 'entity', options);
  }
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
