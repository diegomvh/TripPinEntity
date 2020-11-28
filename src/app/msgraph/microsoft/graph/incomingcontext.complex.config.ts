﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IncomingContext } from './incomingcontext.complex';
import { IncomingContextModel } from './incomingcontext.model';
import { IncomingContextCollection } from './incomingcontext.collection';
//#endregion

export const IncomingContextConfig = {
  name: "incomingContext",
  model: IncomingContextModel,
  collection: IncomingContextCollection,
  annotations: [],
  fields: {
    observedParticipantId: {type: 'Edm.String'},
    onBehalfOf: {type: 'graph.identitySet'},
    sourceParticipantId: {type: 'Edm.String'},
    transferor: {type: 'graph.identitySet'}
  }
} as StructuredTypeConfig<IncomingContext>;