﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Airline } from './airline.entity';
import { AirlineModel } from './airline.model';
import { AirlineCollection } from './airline.collection';
//#endregion

@Injectable()
export class AirlinesService extends ODataEntitySetService<Airline> {
  constructor(protected client: ODataClient) {
    super(client, 'Airlines', 'Microsoft.OData.SampleService.Models.TripPin.Airline');
  }
  //#region ODataApi Model
  airlineModel(attrs?: Partial<Airline>): AirlineModel<Airline> {
    return this.entity().asModel<AirlineModel<Airline>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  airlineCollection(models?: Partial<Airline>[]): AirlineCollection<Airline, AirlineModel<Airline>> {
    return this.entities().asCollection<AirlineModel<Airline>, AirlineCollection<Airline, AirlineModel<Airline>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
