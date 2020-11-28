﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ApplicationEnforcedRestrictionsSessionControl } from './applicationenforcedrestrictionssessioncontrol.entity';
import { CloudAppSecuritySessionControl } from './cloudappsecuritysessioncontrol.entity';
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.entity';
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.entity';
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
import { ApplicationEnforcedRestrictionsSessionControlModel } from './applicationenforcedrestrictionssessioncontrol.model';
import { CloudAppSecuritySessionControlModel } from './cloudappsecuritysessioncontrol.model';
import { ConditionalAccessSessionControlsModel } from './conditionalaccesssessioncontrols.model';
import { PersistentBrowserSessionControlModel } from './persistentbrowsersessioncontrol.model';
import { SignInFrequencySessionControlModel } from './signinfrequencysessioncontrol.model';
import { ApplicationEnforcedRestrictionsSessionControlCollection } from './applicationenforcedrestrictionssessioncontrol.collection';
import { CloudAppSecuritySessionControlCollection } from './cloudappsecuritysessioncontrol.collection';
import { PersistentBrowserSessionControlCollection } from './persistentbrowsersessioncontrol.collection';
import { SignInFrequencySessionControlCollection } from './signinfrequencysessioncontrol.collection';
//#endregion

export class ConditionalAccessSessionControlsCollection<E extends ConditionalAccessSessionControls, M extends ConditionalAccessSessionControlsModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}