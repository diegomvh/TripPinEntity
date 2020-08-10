﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';
import { SupplierCollection } from './supplier.collection';
//#endregion

export const SupplierConfig = {
  name: "Supplier",
  model: SupplierModel,
  collection: SupplierCollection,
  annotations: [],
  fields: {
    SupplierID: {type: 'Edm.Int32', key: true, ref: 'SupplierID', nullable: false},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ContactName: {type: 'Edm.String', maxLength: 30},
    ContactTitle: {type: 'Edm.String', maxLength: 30},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    Phone: {type: 'Edm.String', maxLength: 24},
    Fax: {type: 'Edm.String', maxLength: 24},
    HomePage: {type: 'Edm.String'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Supplier>;