import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataSingle, ODataCollection, ODataValue, ODataEntityResource } from 'angular-odata';

import { Airline, AirlineSchema } from './airline.interface';


@Injectable()
export class AirlinesService extends ODataEntityService<Airline> {
  static path: string = 'Airlines';
  static type: string = 'Microsoft.OData.SampleService.Models.TripPin.Airline';
  
  // Actions
  
  // Functions
  
  // Navigations
  
}
