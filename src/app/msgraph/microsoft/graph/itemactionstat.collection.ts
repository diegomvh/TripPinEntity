﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ItemActionStat } from './itemactionstat.entity';
import { ItemActionStatModel } from './itemactionstat.model';
//#endregion

export class ItemActionStatCollection<E extends ItemActionStat, M extends ItemActionStatModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}