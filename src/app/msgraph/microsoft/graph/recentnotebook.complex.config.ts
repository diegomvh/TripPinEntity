﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RecentNotebook } from './recentnotebook.complex';
import { RecentNotebookModel } from './recentnotebook.model';
import { RecentNotebookCollection } from './recentnotebook.collection';
//#endregion

export const RecentNotebookConfig = {
  name: "recentNotebook",
  model: RecentNotebookModel,
  collection: RecentNotebookCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastAccessedTime: {type: 'Edm.DateTimeOffset'},
    links: {type: 'graph.recentNotebookLinks'},
    sourceService: {type: 'graph.onenoteSourceService'}
  }
} as StructuredTypeConfig<RecentNotebook>;