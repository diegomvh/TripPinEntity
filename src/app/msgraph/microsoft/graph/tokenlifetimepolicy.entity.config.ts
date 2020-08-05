﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TokenLifetimePolicy } from './tokenlifetimepolicy.entity';
//#endregion

export const TokenLifetimePolicyConfig = {
  name: "TokenLifetimePolicy",
  base: "microsoft.graph.stsPolicy",
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TokenLifetimePolicy>;