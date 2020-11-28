﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { IosHomeScreenItem } from './ioshomescreenitem.entity';
import { IosHomeScreenItemModel } from './ioshomescreenitem.model';
//#endregion

export class IosHomeScreenItemCollection<E extends IosHomeScreenItem, M extends IosHomeScreenItemModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}