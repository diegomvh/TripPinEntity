﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { FlashService } from './flash.service';
//#endregion

//#region ODataApi EntitySetConfig
export const FlashServiceEntitySetConfig = {
  name: "Flash",
  entityType: "CBS.Website.ODataApi.Models.Flash",
  service: FlashService
} as EntitySetConfig;
//#endregion