﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ToneInfo } from './toneinfo.complex';
import { ToneInfoModel } from './toneinfo.model';
import { ToneInfoCollection } from './toneinfo.collection';
//#endregion

export const ToneInfoConfig = {
  name: "toneInfo",
  model: ToneInfoModel,
  collection: ToneInfoCollection,
  annotations: [],
  fields: {
    sequenceId: {type: 'Edm.Int64', nullable: false},
    tone: {type: 'graph.tone', nullable: false}
  }
} as StructuredTypeConfig<ToneInfo>;