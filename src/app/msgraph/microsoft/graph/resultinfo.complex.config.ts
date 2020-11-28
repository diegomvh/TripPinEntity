﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResultInfo } from './resultinfo.complex';
import { ResultInfoModel } from './resultinfo.model';
import { ResultInfoCollection } from './resultinfo.collection';
//#endregion

export const ResultInfoConfig = {
  name: "resultInfo",
  model: ResultInfoModel,
  collection: ResultInfoCollection,
  annotations: [],
  fields: {
    code: {type: 'Edm.Int32', nullable: false},
    message: {type: 'Edm.String'},
    subcode: {type: 'Edm.Int32', nullable: false}
  }
} as StructuredTypeConfig<ResultInfo>;