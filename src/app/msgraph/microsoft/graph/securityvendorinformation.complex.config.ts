﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityVendorInformation } from './securityvendorinformation.complex';
import { SecurityVendorInformationModel } from './securityvendorinformation.model';
import { SecurityVendorInformationCollection } from './securityvendorinformation.collection';
//#endregion

export const SecurityVendorInformationConfig = {
  name: "securityVendorInformation",
  model: SecurityVendorInformationModel,
  collection: SecurityVendorInformationCollection,
  annotations: [],
  fields: {
    provider: {type: 'Edm.String'},
    providerVersion: {type: 'Edm.String'},
    subProvider: {type: 'Edm.String'},
    vendor: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<SecurityVendorInformation>;