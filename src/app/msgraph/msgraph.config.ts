﻿import { ApiConfig, EDM_PARSERS } from 'angular-odata';

//#region ODataApi Imports
import { GraphSchema } from './microsoft/graph/graph.schema';
import { CallRecordsSchema } from './microsoft/graph/callRecords/callrecords.schema';
//#endregion

export const MsGraphConfig = {
  name: 'MsGraph',
  serviceRootUrl: 'https://graph.microsoft.com/v1.0/',
  version: '4.0',
  creation: new Date('2020-09-10T09:05:25.4894133-03:00'),
  schemas: [
    GraphSchema,
    CallRecordsSchema
  ],
  parsers: EDM_PARSERS
} as ApiConfig;