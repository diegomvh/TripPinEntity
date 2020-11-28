﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OperationError } from './operationerror.entity';
import { OperationErrorCollection } from './operationerror.collection';
//#endregion

export class OperationErrorModel<E extends OperationError> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}