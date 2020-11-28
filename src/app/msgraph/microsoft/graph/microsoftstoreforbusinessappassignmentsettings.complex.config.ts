﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MicrosoftStoreForBusinessAppAssignmentSettings } from './microsoftstoreforbusinessappassignmentsettings.complex';
import { MicrosoftStoreForBusinessAppAssignmentSettingsModel } from './microsoftstoreforbusinessappassignmentsettings.model';
import { MicrosoftStoreForBusinessAppAssignmentSettingsCollection } from './microsoftstoreforbusinessappassignmentsettings.collection';
//#endregion

export const MicrosoftStoreForBusinessAppAssignmentSettingsConfig = {
  name: "microsoftStoreForBusinessAppAssignmentSettings",
  base: "microsoft.graph.mobileAppAssignmentSettings",
  model: MicrosoftStoreForBusinessAppAssignmentSettingsModel,
  collection: MicrosoftStoreForBusinessAppAssignmentSettingsCollection,
  annotations: [],
  fields: {
    useDeviceContext: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MicrosoftStoreForBusinessAppAssignmentSettings>;