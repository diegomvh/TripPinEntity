﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSOfficeSuiteApp } from './macosofficesuiteapp.entity';
//#endregion

export const MacOSOfficeSuiteAppConfig = {
  name: "MacOSOfficeSuiteApp",
  base: "microsoft.graph.mobileApp",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<MacOSOfficeSuiteApp>;