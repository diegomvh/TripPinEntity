﻿import { Container } from 'angular-odata';

//#region ODataApi Imports
import { ProductsServiceConfig } from './products.service.config';
import { CategoriesServiceConfig } from './categories.service.config';
import { SuppliersServiceConfig } from './suppliers.service.config';
//#endregion

export const DemoServiceContainer = {
  name: "DemoServiceContainer",
  annotations: [],
  services: [
    ProductsServiceConfig,
    CategoriesServiceConfig,
    SuppliersServiceConfig
  ]
} as Container;