﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticRepliesMailTips } from './automaticrepliesmailtips.entity';
import { AutomaticRepliesMailTipsModel } from './automaticrepliesmailtips.model';
import { AutomaticRepliesMailTipsCollection } from './automaticrepliesmailtips.collection';
//#endregion

export const AutomaticRepliesMailTipsConfig = {
  name: "automaticRepliesMailTips",
  model: AutomaticRepliesMailTipsModel,
  collection: AutomaticRepliesMailTipsCollection,
  annotations: [],
  fields: {
    message: {type: 'Edm.String'},
    messageLanguage: {type: 'graph.localeInfo'},
    scheduledEndTime: {type: 'graph.dateTimeTimeZone'},
    scheduledStartTime: {type: 'graph.dateTimeTimeZone'}
  }
} as EntityConfig<AutomaticRepliesMailTips>;