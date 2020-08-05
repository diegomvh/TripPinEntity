﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ActivityBasedTimeoutPolicy } from './activitybasedtimeoutpolicy.entity';
//#endregion

export const ActivityBasedTimeoutPolicyConfig = {
  name: "ActivityBasedTimeoutPolicy",
  base: "microsoft.graph.stsPolicy",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<ActivityBasedTimeoutPolicy>;