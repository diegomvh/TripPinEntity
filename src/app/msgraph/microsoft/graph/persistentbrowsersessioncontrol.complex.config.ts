﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersistentBrowserSessionControl } from './persistentbrowsersessioncontrol.complex';
import { PersistentBrowserSessionControlModel } from './persistentbrowsersessioncontrol.model';
import { PersistentBrowserSessionControlCollection } from './persistentbrowsersessioncontrol.collection';
//#endregion

export const PersistentBrowserSessionControlConfig = {
  name: "persistentBrowserSessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  model: PersistentBrowserSessionControlModel,
  collection: PersistentBrowserSessionControlCollection,
  annotations: [],
  fields: {
    mode: {type: 'graph.persistentBrowserSessionMode'}
  }
} as StructuredTypeConfig<PersistentBrowserSessionControl>;