﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { FieldValueSet } from './fieldvalueset.entity';
//#endregion

export const FieldValueSetConfig = {
  name: "FieldValueSet",
  base: "microsoft.graph.entity",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<FieldValueSet>;