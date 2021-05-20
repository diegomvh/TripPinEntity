﻿import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

@Model()
export class TimeCategoryModel<E extends TimeCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  Key!: string;
  
  
  @ModelField()
  Title?: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  Status?: string;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}