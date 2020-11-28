﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ScheduleEntity } from './scheduleentity.complex';
import { ScheduleEntityModel } from './scheduleentity.model';
import { ScheduleEntityCollection } from './scheduleentity.collection';
//#endregion

export const ScheduleEntityConfig = {
  name: "scheduleEntity",
  model: ScheduleEntityModel,
  collection: ScheduleEntityCollection,
  annotations: [],
  fields: {
    endDateTime: {type: 'Edm.DateTimeOffset'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    theme: {type: 'graph.scheduleEntityTheme', nullable: false}
  }
} as StructuredTypeConfig<ScheduleEntity>;