﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TermsAndConditions } from './termsandconditions.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { TermsAndConditionsAcceptanceStatusModel } from './termsandconditionsacceptancestatus.model';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
//#endregion

export class TermsAndConditionsAcceptanceStatusCollection<E extends TermsAndConditionsAcceptanceStatus, M extends TermsAndConditionsAcceptanceStatusModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}