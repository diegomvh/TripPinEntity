﻿//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CategoryEntityConfig = {
  name: "Category",
  open: true,
  model: CategoryModel,
  collection: CategoryCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Name: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Category>;
//#endregion