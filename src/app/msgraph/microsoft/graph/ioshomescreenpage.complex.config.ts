﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosHomeScreenPage } from './ioshomescreenpage.complex';
import { IosHomeScreenPageModel } from './ioshomescreenpage.model';
import { IosHomeScreenPageCollection } from './ioshomescreenpage.collection';
//#endregion

export const IosHomeScreenPageConfig = {
  name: "iosHomeScreenPage",
  model: IosHomeScreenPageModel,
  collection: IosHomeScreenPageCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    icons: {type: 'graph.iosHomeScreenItem', nullable: false, collection: true}
  }
} as StructuredTypeConfig<IosHomeScreenPage>;