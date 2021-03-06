﻿//#region AngularOData Imports
import { 
  EntitySetConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { PeopleService } from './people.service';
//#endregion

//#region ODataApi EntitySetConfig
export const PeopleServiceEntitySetConfig = {
  name: "People",
  entityType: "Microsoft.OData.SampleService.Models.TripPin.Person",
  annotations: [
  {
    "type": "Org.OData.Core.V1.OptimisticConcurrency",
    "properties": [
      "Concurrency"
    ]
  },
  {
    "type": "Org.OData.Core.V1.ResourcePath",
    "string": "People"
  },
  {
    "type": "Org.OData.Capabilities.V1.NavigationRestrictions"
  },
  {
    "type": "Org.OData.Capabilities.V1.SearchRestrictions",
    "values": [
      "",
      "Org.OData.Capabilities.V1.SearchExpressions/none"
    ]
  },
  {
    "type": "Org.OData.Capabilities.V1.InsertRestrictions",
    "values": [
      "",
      "TripsFriends"
    ]
  }
],
  service: PeopleService
} as EntitySetConfig;
//#endregion