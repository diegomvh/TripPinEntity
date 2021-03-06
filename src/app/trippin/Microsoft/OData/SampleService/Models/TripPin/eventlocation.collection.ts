﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { LocationCollection } from './location.collection';
import { EventLocation } from './eventlocation.complex';
import { EventLocationModel } from './eventlocation.model';
//#endregion

export class EventLocationCollection<E extends EventLocation, M extends EventLocationModel<E>> extends LocationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}