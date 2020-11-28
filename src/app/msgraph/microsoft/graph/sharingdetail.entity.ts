﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { InsightIdentity } from './insightidentity.entity';
import { ResourceReference } from './resourcereference.entity';
import { InsightIdentityModel } from './insightidentity.model';
import { ResourceReferenceModel } from './resourcereference.model';
import { InsightIdentityCollection } from './insightidentity.collection';
import { ResourceReferenceCollection } from './resourcereference.collection';
//#endregion

export interface SharingDetail {
  //#region ODataApi Properties
  sharedBy?: InsightIdentity;
  sharedDateTime?: Date;
  sharingReference?: ResourceReference;
  sharingSubject?: string;
  sharingType?: string;
  //#endregion
}