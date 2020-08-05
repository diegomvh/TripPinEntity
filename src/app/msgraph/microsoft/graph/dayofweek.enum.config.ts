﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { DayOfWeek } from './dayofweek.enum';
//#endregion

export const DayOfWeekConfig = {
  name: "DayOfWeek",
  members: DayOfWeek
} as EnumConfig<DayOfWeek>;