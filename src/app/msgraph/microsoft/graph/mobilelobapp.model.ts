﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MobileAppModel } from './mobileapp.model';
import { MobileLobApp } from './mobilelobapp.entity';
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileLobAppCollection } from './mobilelobapp.collection';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export class MobileLobAppModel<E extends MobileLobApp> extends MobileAppModel<E> {
  //#region ODataApi Properties
  committedContentVersion?: string;
  fileName?: string;
  size: number;
  contentVersions?: MobileAppContentCollection<MobileAppContent, MobileAppContentModel<MobileAppContent>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}