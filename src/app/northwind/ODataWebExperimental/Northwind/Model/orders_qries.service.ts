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
import { OrdersQry } from '../../../NorthwindModel/orders_qry.entity';
import { OrdersQryModel } from '../../../NorthwindModel/orders_qry.model';
import { OrdersQryCollection } from '../../../NorthwindModel/orders_qry.collection';
//#endregion

@Injectable()
export class OrdersQriesService extends ODataEntityService<OrdersQry> {
  constructor(protected client: ODataClient) {
    super(client, 'Orders_Qries', 'NorthwindModel.Orders_Qry');
  }

  //#region ODataApi Model
  ordersQryModel(): OrdersQryModel<OrdersQry> {
    return this.entity().asModel() as OrdersQryModel<OrdersQry>;
  }
  //#endregion
  //#region ODataApi Collection
  ordersQryCollection(): OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>> {
    return this.entities().asCollection() as OrdersQryCollection<OrdersQry, OrdersQryModel<OrdersQry>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
