﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { TypedDataSetService } from './typeddataset.service';
//#endregion

//#region ODataApi EntitySetConfig
export const TypedDataSetServiceEntitySetConfig = {
  name: "TypedDataSet",
  entityType: "Cbs.OData.TData",
  service: TypedDataSetService
} as EntitySetConfig;
//#endregion