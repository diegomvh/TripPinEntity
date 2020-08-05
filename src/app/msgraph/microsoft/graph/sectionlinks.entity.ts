﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ExternalLink } from './externallink.entity';
//#endregion

export interface SectionLinks {
  //#region ODataApi Properties
  oneNoteClientUrl?: ExternalLink;
  oneNoteWebUrl?: ExternalLink;
  //#endregion
}