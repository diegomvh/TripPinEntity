﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SignInCollection } from './signin.collection';
import { RestrictedSignIn } from './restrictedsignin.entity';
import { RestrictedSignInModel } from './restrictedsignin.model';
//#endregion

export class RestrictedSignInCollection<E extends RestrictedSignIn, M extends RestrictedSignInModel<E>> extends SignInCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}