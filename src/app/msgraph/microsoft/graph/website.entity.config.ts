﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Website } from './website.entity';
import { WebsiteModel } from './website.model';
import { WebsiteCollection } from './website.collection';
//#endregion

export const WebsiteConfig = {
  name: "website",
  model: WebsiteModel,
  collection: WebsiteCollection,
  annotations: [],
  fields: {
    address: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    type: {type: 'graph.websiteType'}
  }
} as EntityConfig<Website>;