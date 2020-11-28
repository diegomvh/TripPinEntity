﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { EntityModel } from './entity.model';
import { EntityCollection } from './entity.collection';
//#endregion

export interface WorkbookRangeBorder extends Entity {
  //#region ODataApi Properties
  color?: string;
  sideIndex?: string;
  style?: string;
  weight?: string;
  //#endregion
}