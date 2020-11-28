﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedLicense } from './assignedlicense.complex';
import { AssignedLicenseModel } from './assignedlicense.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
//#endregion

export const AssignedLicenseConfig = {
  name: "assignedLicense",
  model: AssignedLicenseModel,
  collection: AssignedLicenseCollection,
  annotations: [],
  fields: {
    disabledPlans: {type: 'Edm.Guid', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AssignedLicense>;