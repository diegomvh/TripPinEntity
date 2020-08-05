﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AuditActivityInitiator } from './auditactivityinitiator.entity';
//#endregion

export const AuditActivityInitiatorConfig = {
  name: "AuditActivityInitiator",
  annotations: [],
  fields: {
    user: {type: 'graph.userIdentity'},
    app: {type: 'graph.appIdentity'}
  }
} as EntityConfig<AuditActivityInitiator>;