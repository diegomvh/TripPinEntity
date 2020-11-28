﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosDeviceType } from './iosdevicetype.complex';
import { IosDeviceTypeModel } from './iosdevicetype.model';
import { IosDeviceTypeCollection } from './iosdevicetype.collection';
//#endregion

export const IosDeviceTypeConfig = {
  name: "iosDeviceType",
  model: IosDeviceTypeModel,
  collection: IosDeviceTypeCollection,
  annotations: [],
  fields: {
    iPad: {type: 'Edm.Boolean', nullable: false},
    iPhoneAndIPod: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosDeviceType>;