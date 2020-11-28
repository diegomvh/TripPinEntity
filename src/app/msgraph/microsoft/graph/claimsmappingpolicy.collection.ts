﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { StsPolicyCollection } from './stspolicy.collection';
import { ClaimsMappingPolicy } from './claimsmappingpolicy.entity';
import { ClaimsMappingPolicyModel } from './claimsmappingpolicy.model';
//#endregion

export class ClaimsMappingPolicyCollection<E extends ClaimsMappingPolicy, M extends ClaimsMappingPolicyModel<E>> extends StsPolicyCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}