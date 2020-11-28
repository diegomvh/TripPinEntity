﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IncompleteData } from './incompletedata.entity';
import { IncompleteDataCollection } from './incompletedata.collection';
//#endregion

export class IncompleteDataModel<E extends IncompleteData> extends ODataModel<E> {
  //#region ODataApi Properties
  missingDataBeforeDateTime?: Date;
  wasThrottled?: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}