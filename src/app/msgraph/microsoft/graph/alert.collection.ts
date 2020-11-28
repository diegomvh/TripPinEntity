﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { AlertFeedback } from './alertfeedback.enum';
import { AlertSeverity } from './alertseverity.enum';
import { AlertStatus } from './alertstatus.enum';
import { AlertHistoryState } from './alerthistorystate.entity';
import { AlertTrigger } from './alerttrigger.entity';
import { CloudAppSecurityState } from './cloudappsecuritystate.entity';
import { FileSecurityState } from './filesecuritystate.entity';
import { HostSecurityState } from './hostsecuritystate.entity';
import { MalwareState } from './malwarestate.entity';
import { NetworkConnection } from './networkconnection.entity';
import { Process } from './process.entity';
import { RegistryKeyState } from './registrykeystate.entity';
import { SecurityResource } from './securityresource.entity';
import { SecurityVendorInformation } from './securityvendorinformation.entity';
import { UserSecurityState } from './usersecuritystate.entity';
import { VulnerabilityState } from './vulnerabilitystate.entity';
import { Alert } from './alert.entity';
import { AlertHistoryStateModel } from './alerthistorystate.model';
import { AlertTriggerModel } from './alerttrigger.model';
import { CloudAppSecurityStateModel } from './cloudappsecuritystate.model';
import { FileSecurityStateModel } from './filesecuritystate.model';
import { HostSecurityStateModel } from './hostsecuritystate.model';
import { MalwareStateModel } from './malwarestate.model';
import { NetworkConnectionModel } from './networkconnection.model';
import { ProcessModel } from './process.model';
import { RegistryKeyStateModel } from './registrykeystate.model';
import { SecurityResourceModel } from './securityresource.model';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { UserSecurityStateModel } from './usersecuritystate.model';
import { VulnerabilityStateModel } from './vulnerabilitystate.model';
import { AlertModel } from './alert.model';
import { AlertHistoryStateCollection } from './alerthistorystate.collection';
import { AlertTriggerCollection } from './alerttrigger.collection';
import { CloudAppSecurityStateCollection } from './cloudappsecuritystate.collection';
import { FileSecurityStateCollection } from './filesecuritystate.collection';
import { HostSecurityStateCollection } from './hostsecuritystate.collection';
import { MalwareStateCollection } from './malwarestate.collection';
import { NetworkConnectionCollection } from './networkconnection.collection';
import { ProcessCollection } from './process.collection';
import { RegistryKeyStateCollection } from './registrykeystate.collection';
import { SecurityResourceCollection } from './securityresource.collection';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
import { UserSecurityStateCollection } from './usersecuritystate.collection';
import { VulnerabilityStateCollection } from './vulnerabilitystate.collection';
//#endregion

export class AlertCollection<E extends Alert, M extends AlertModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}