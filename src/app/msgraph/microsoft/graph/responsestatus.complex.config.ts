﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResponseStatus } from './responsestatus.complex';
import { ResponseStatusModel } from './responsestatus.model';
import { ResponseStatusCollection } from './responsestatus.collection';
//#endregion

export const ResponseStatusConfig = {
  name: "responseStatus",
  model: ResponseStatusModel,
  collection: ResponseStatusCollection,
  annotations: [],
  fields: {
    response: {type: 'graph.responseType'},
    time: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<ResponseStatus>;