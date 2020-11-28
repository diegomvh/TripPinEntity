﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Address } from './address.entity';
import { Product } from './product.entity';
import { AddressModel } from './address.model';
import { ProductModel } from './product.model';
import { AddressCollection } from './address.collection';
import { ProductCollection } from './product.collection';
//#endregion

export interface Supplier {
  //#region ODataApi Properties
  ID: number;
  Name?: string;
  Address?: Address;
  Location?: any;
  Concurrency: number;
  Products?: Product[];
  //#endregion
}