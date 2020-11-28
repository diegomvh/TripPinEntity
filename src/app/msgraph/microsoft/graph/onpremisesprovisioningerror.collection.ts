﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
//#endregion

export class OnPremisesProvisioningErrorCollection<E extends OnPremisesProvisioningError, M extends OnPremisesProvisioningErrorModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}