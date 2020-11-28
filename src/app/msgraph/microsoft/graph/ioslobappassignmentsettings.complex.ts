﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppAssignmentSettings } from './mobileappassignmentsettings.complex';
import { MobileAppAssignmentSettingsModel } from './mobileappassignmentsettings.model';
import { MobileAppAssignmentSettingsCollection } from './mobileappassignmentsettings.collection';
//#endregion

export interface IosLobAppAssignmentSettings extends MobileAppAssignmentSettings {
  //#region ODataApi Properties
  vpnConfigurationId?: string;
  //#endregion
}