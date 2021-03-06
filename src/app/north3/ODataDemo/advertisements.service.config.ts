﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { AdvertisementsService } from './advertisements.service';
//#endregion

//#region ODataApi EntitySetConfig
export const AdvertisementsServiceEntitySetConfig = {
  name: "Advertisements",
  entityType: "ODataDemo.Advertisement",
  service: AdvertisementsService
} as EntitySetConfig;
//#endregion