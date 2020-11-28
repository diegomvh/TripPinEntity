﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DirectoryObjectCollection } from './directoryobject.collection';
import { AddIn } from './addin.entity';
import { ApiApplication } from './apiapplication.entity';
import { AppRole } from './approle.entity';
import { InformationalUrl } from './informationalurl.entity';
import { KeyCredential } from './keycredential.entity';
import { OptionalClaims } from './optionalclaims.entity';
import { ParentalControlSettings } from './parentalcontrolsettings.entity';
import { PasswordCredential } from './passwordcredential.entity';
import { PublicClientApplication } from './publicclientapplication.entity';
import { RequiredResourceAccess } from './requiredresourceaccess.entity';
import { WebApplication } from './webapplication.entity';
import { DirectoryObject } from './directoryobject.entity';
import { Application } from './application.entity';
import { ExtensionProperty } from './extensionproperty.entity';
import { HomeRealmDiscoveryPolicy } from './homerealmdiscoverypolicy.entity';
import { TokenIssuancePolicy } from './tokenissuancepolicy.entity';
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
import { AddInModel } from './addin.model';
import { ApiApplicationModel } from './apiapplication.model';
import { AppRoleModel } from './approle.model';
import { InformationalUrlModel } from './informationalurl.model';
import { KeyCredentialModel } from './keycredential.model';
import { OptionalClaimsModel } from './optionalclaims.model';
import { ParentalControlSettingsModel } from './parentalcontrolsettings.model';
import { PasswordCredentialModel } from './passwordcredential.model';
import { PublicClientApplicationModel } from './publicclientapplication.model';
import { RequiredResourceAccessModel } from './requiredresourceaccess.model';
import { WebApplicationModel } from './webapplication.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { ApplicationModel } from './application.model';
import { ExtensionPropertyModel } from './extensionproperty.model';
import { HomeRealmDiscoveryPolicyModel } from './homerealmdiscoverypolicy.model';
import { TokenIssuancePolicyModel } from './tokenissuancepolicy.model';
import { TokenLifetimePolicyModel } from './tokenlifetimepolicy.model';
import { AddInCollection } from './addin.collection';
import { ApiApplicationCollection } from './apiapplication.collection';
import { AppRoleCollection } from './approle.collection';
import { InformationalUrlCollection } from './informationalurl.collection';
import { KeyCredentialCollection } from './keycredential.collection';
import { OptionalClaimsCollection } from './optionalclaims.collection';
import { ParentalControlSettingsCollection } from './parentalcontrolsettings.collection';
import { PasswordCredentialCollection } from './passwordcredential.collection';
import { PublicClientApplicationCollection } from './publicclientapplication.collection';
import { RequiredResourceAccessCollection } from './requiredresourceaccess.collection';
import { WebApplicationCollection } from './webapplication.collection';
import { ExtensionPropertyCollection } from './extensionproperty.collection';
import { HomeRealmDiscoveryPolicyCollection } from './homerealmdiscoverypolicy.collection';
import { TokenIssuancePolicyCollection } from './tokenissuancepolicy.collection';
import { TokenLifetimePolicyCollection } from './tokenlifetimepolicy.collection';
//#endregion

export class ApplicationCollection<E extends Application, M extends ApplicationModel<E>> extends DirectoryObjectCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  public delta(options?: HttpOptions): Observable<ApplicationCollection<Application, ApplicationModel<Application>>> {
    var res = this._function<null, Application>('microsoft.graph.delta');
    res.segment.entitySet('applications');
    return res.call(null, 'collection', options) as Observable<ApplicationCollection<Application, ApplicationModel<Application>>>;
  }
  //#endregion
}