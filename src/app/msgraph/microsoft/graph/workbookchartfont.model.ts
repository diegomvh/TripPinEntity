﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { WorkbookChartFont } from './workbookchartfont.entity';
import { WorkbookChartFontCollection } from './workbookchartfont.collection';
//#endregion

export class WorkbookChartFontModel<E extends WorkbookChartFont> extends EntityModel<E> {
  //#region ODataApi Properties
  bold?: boolean;
  color?: string;
  italic?: boolean;
  name?: string;
  size?: number;
  underline?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}