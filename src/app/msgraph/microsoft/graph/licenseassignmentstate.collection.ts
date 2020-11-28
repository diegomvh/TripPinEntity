﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { LicenseAssignmentStateModel } from './licenseassignmentstate.model';
//#endregion

export class LicenseAssignmentStateCollection<E extends LicenseAssignmentState, M extends LicenseAssignmentStateModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}