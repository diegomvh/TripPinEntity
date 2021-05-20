﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TimeCategory } from './timecategory.entity';
import { TimeCategoryModel } from './timecategory.model';
import { TimeCategoryCollection } from './timecategory.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const TimeCategoryEntityConfig = {
  name: "TimeCategory",
  model: TimeCategoryModel,
  collection: TimeCategoryCollection,
  keys: [{ref: 'Key'}],
  fields: {
    Key: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Status: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<TimeCategory>;
//#endregion