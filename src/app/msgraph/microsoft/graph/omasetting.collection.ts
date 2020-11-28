﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OmaSetting } from './omasetting.entity';
import { OmaSettingModel } from './omasetting.model';
//#endregion

export class OmaSettingCollection<E extends OmaSetting, M extends OmaSettingModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}