﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { BaseItemModel } from './baseitem.model';
import { BaseItemCollection } from './baseitem.collection';
//#endregion

export const BaseItemConfig = {
  name: "baseItem",
  base: "microsoft.graph.entity",
  model: BaseItemModel,
  collection: BaseItemCollection,
  annotations: [],
  fields: {
    createdBy: {type: 'graph.identitySet'},
    createdDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    description: {type: 'Edm.String'},
    eTag: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    name: {type: 'Edm.String'},
    parentReference: {type: 'graph.itemReference'},
    webUrl: {type: 'Edm.String'},
    createdByUser: {type: 'graph.user', navigation: true},
    lastModifiedByUser: {type: 'graph.user', navigation: true}
  }
} as EntityConfig<BaseItem>;