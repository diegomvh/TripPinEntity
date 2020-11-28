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
import { Address } from './address.entity';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { SupplierModel } from './supplier.model';
import { AddressCollection } from './address.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntityService<Supplier> {
  constructor(protected client: ODataClient) {
    super(client, 'Suppliers', 'ODataDemo.Supplier');
  }

  //#region ODataApi Model
  supplierModel(): SupplierModel<Supplier> {
    return super.model() as SupplierModel<Supplier>;
  }
  //#endregion
  //#region ODataApi Collection
  supplierCollection(): SupplierCollection<Supplier, SupplierModel<Supplier>> {
    return super.collection() as SupplierCollection<Supplier, SupplierModel<Supplier>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
