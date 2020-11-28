﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PublicErrorDetail } from './publicerrordetail.entity';
import { PublicErrorDetailCollection } from './publicerrordetail.collection';
//#endregion

export class PublicErrorDetailModel<E extends PublicErrorDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  code?: string;
  message?: string;
  target?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}