﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ItemBody } from './itembody.complex';
import { ItemBodyModel } from './itembody.model';
import { ItemBodyCollection } from './itembody.collection';
//#endregion

export const ItemBodyConfig = {
  name: "itemBody",
  model: ItemBodyModel,
  collection: ItemBodyCollection,
  annotations: [],
  fields: {
    content: {type: 'Edm.String'},
    contentType: {type: 'graph.bodyType'}
  }
} as StructuredTypeConfig<ItemBody>;