﻿//#region AngularOData Imports
import { 
  Duration 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
//#endregion

export interface GeoDetailCategory {
  //#region ODataApi Properties
  Key: string;
  Title?: string;
  Description?: string;
  Municipality?: string;
  DetailRegionCode?: string;
  //#endregion
}