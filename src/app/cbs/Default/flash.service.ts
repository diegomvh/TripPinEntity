﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Flash } from '../CBS/Website/ODataApi/Models/flash.entity';
import { FlashModel } from '../CBS/Website/ODataApi/Models/flash.model';
import { FlashCollection } from '../CBS/Website/ODataApi/Models/flash.collection';
//#endregion

@Injectable()
export class FlashService extends ODataEntityService<Flash> {
  constructor(protected client: ODataClient) {
    super(client, 'Flash', 'CBS.Website.ODataApi.Models.Flash');
  }

  //#region ODataApi Model
  flashModel(): FlashModel<Flash> {
    return this.entity().asModel() as FlashModel<Flash>;
  }
  //#endregion
  //#region ODataApi Collection
  flashCollection(): FlashCollection<Flash, FlashModel<Flash>> {
    return this.entities().asCollection() as FlashCollection<Flash, FlashModel<Flash>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
