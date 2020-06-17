﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Photo } from './photo.entity';
//#endregion

export const PhotoConfig = {
  name: "Photo",
  annotations: [{"type":"Org.OData.Core.V1.AcceptableMediaTypes"}],
  fields: {
    Id: {type: 'Number', key: true, ref: 'Id', nullable: false, annotations: [{"type":"Org.OData.Core.V1.Permissions","permissions":["Org.OData.Core.V1.Permission/Read"]}]},
    Name: {type: 'String'}
  }
} as EntityConfig<Photo>;