﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LocationModel } from './location.model';
import { LocationConstraintItem } from './locationconstraintitem.entity';
import { LocationConstraintItemCollection } from './locationconstraintitem.collection';
//#endregion

export class LocationConstraintItemModel<E extends LocationConstraintItem> extends LocationModel<E> {
  //#region ODataApi Properties
  resolveAvailability?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}