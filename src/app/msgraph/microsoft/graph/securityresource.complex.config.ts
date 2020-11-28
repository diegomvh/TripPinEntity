﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SecurityResource } from './securityresource.complex';
import { SecurityResourceModel } from './securityresource.model';
import { SecurityResourceCollection } from './securityresource.collection';
//#endregion

export const SecurityResourceConfig = {
  name: "securityResource",
  model: SecurityResourceModel,
  collection: SecurityResourceCollection,
  annotations: [],
  fields: {
    resource: {type: 'Edm.String'},
    resourceType: {type: 'graph.securityResourceType'}
  }
} as StructuredTypeConfig<SecurityResource>;