﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { MediaDirection } from './mediadirection.enum';
//#endregion

export const MediaDirectionConfig = {
  name: "MediaDirection",
  members: MediaDirection
} as EnumConfig<MediaDirection>;