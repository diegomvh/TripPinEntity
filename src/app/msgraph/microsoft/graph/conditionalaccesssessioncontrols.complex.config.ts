﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessSessionControls } from './conditionalaccesssessioncontrols.complex';
import { ConditionalAccessSessionControlsModel } from './conditionalaccesssessioncontrols.model';
import { ConditionalAccessSessionControlsCollection } from './conditionalaccesssessioncontrols.collection';
//#endregion

export const ConditionalAccessSessionControlsConfig = {
  name: "conditionalAccessSessionControls",
  model: ConditionalAccessSessionControlsModel,
  collection: ConditionalAccessSessionControlsCollection,
  annotations: [],
  fields: {
    applicationEnforcedRestrictions: {type: 'graph.applicationEnforcedRestrictionsSessionControl'},
    cloudAppSecurity: {type: 'graph.cloudAppSecuritySessionControl'},
    persistentBrowser: {type: 'graph.persistentBrowserSessionControl'},
    signInFrequency: {type: 'graph.signInFrequencySessionControl'}
  }
} as StructuredTypeConfig<ConditionalAccessSessionControls>;