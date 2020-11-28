﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SignInFrequencySessionControl } from './signinfrequencysessioncontrol.entity';
import { SignInFrequencySessionControlModel } from './signinfrequencysessioncontrol.model';
import { SignInFrequencySessionControlCollection } from './signinfrequencysessioncontrol.collection';
//#endregion

export const SignInFrequencySessionControlConfig = {
  name: "signInFrequencySessionControl",
  base: "microsoft.graph.conditionalAccessSessionControl",
  model: SignInFrequencySessionControlModel,
  collection: SignInFrequencySessionControlCollection,
  annotations: [],
  fields: {
    type: {type: 'graph.signinFrequencyType'},
    value: {type: 'Edm.Int32'}
  }
} as EntityConfig<SignInFrequencySessionControl>;