﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

export const DeviceThreatProtectionLevelConfig = {
  name: "DeviceThreatProtectionLevel",
  members: DeviceThreatProtectionLevel
} as EnumConfig<DeviceThreatProtectionLevel>;