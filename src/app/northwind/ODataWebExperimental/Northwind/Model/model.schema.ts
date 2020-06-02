﻿import { Schema } from 'angular-odata';

//#region ODataApi Imports
import { NorthwindEntitiesContainer } from './northwindentities.container';
//#endregion

export const ModelSchema = {
  namespace: "ODataWebExperimental.Northwind.Model",
  enums: [
    
  ],
  entities: [
    
  ],
  containers: [
    NorthwindEntitiesContainer
  ]
} as Schema;