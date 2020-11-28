﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ComplianceStatus } from './compliancestatus.enum';
import { SettingSource } from './settingsource.complex';
import { SettingSourceModel } from './settingsource.model';
import { SettingSourceCollection } from './settingsource.collection';
//#endregion

export interface DeviceCompliancePolicySettingState {
  //#region ODataApi Properties
  currentValue?: string;
  errorCode: number;
  errorDescription?: string;
  instanceDisplayName?: string;
  setting?: string;
  settingName?: string;
  sources?: SettingSource[];
  state: ComplianceStatus;
  userEmail?: string;
  userId?: string;
  userName?: string;
  userPrincipalName?: string;
  //#endregion
}