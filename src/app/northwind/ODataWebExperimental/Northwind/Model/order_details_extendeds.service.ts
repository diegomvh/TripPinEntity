﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  ODataClient,
  ODataEntitySetService, 
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
  Expand, 
  Select,
  HttpOptions,
  HttpActionOptions,
  HttpFunctionOptions,
  HttpNavigationPropertyOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { OrderDetailsExtended } from '../../../NorthwindModel/order_details_extended.entity';
import { OrderDetailsExtendedModel } from '../../../NorthwindModel/order_details_extended.model';
import { OrderDetailsExtendedCollection } from '../../../NorthwindModel/order_details_extended.collection';
//#endregion

@Injectable()
export class OrderDetailsExtendedsService extends ODataEntitySetService<OrderDetailsExtended> {
  constructor(protected client: ODataClient) {
    super(client, 'Order_Details_Extendeds', 'NorthwindModel.Order_Details_Extended');
  }
  //#region ODataApi Model
  orderDetailsExtendedModel(attrs?: Partial<OrderDetailsExtended>): OrderDetailsExtendedModel<OrderDetailsExtended> {
    return this.entity().asModel<OrderDetailsExtendedModel<OrderDetailsExtended>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  orderDetailsExtendedCollection(models?: Partial<OrderDetailsExtended>[]): OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>> {
    return this.entities().asCollection<OrderDetailsExtendedModel<OrderDetailsExtended>, OrderDetailsExtendedCollection<OrderDetailsExtended, OrderDetailsExtendedModel<OrderDetailsExtended>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
