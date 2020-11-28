﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { SiteCollection } from './sitecollection.complex';
import { SiteCollectionModel } from './sitecollection.model';
import { SiteCollectionCollection } from './sitecollection.collection';
//#endregion

export const SiteCollectionConfig = {
  name: "siteCollection",
  model: SiteCollectionModel,
  collection: SiteCollectionCollection,
  annotations: [],
  fields: {
    dataLocationCode: {type: 'Edm.String'},
    hostname: {type: 'Edm.String'},
    root: {type: 'graph.root'}
  }
} as StructuredTypeConfig<SiteCollection>;