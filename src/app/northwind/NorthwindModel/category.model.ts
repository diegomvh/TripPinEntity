﻿import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
import { 
  Model, 
  ModelField, 
  ODataModel, 
  ODataCollection, 
  HttpOptions, 
  HttpActionOptions, 
  HttpFunctionOptions, 
  HttpNavigationPropertyOptions, 
  Duration, 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Category } from './category.entity';
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { CategoryCollection } from './category.collection';
import { ProductCollection } from './product.collection';
//#endregion

@Model()
export class CategoryModel<E extends Category> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  CategoryID!: number;
  
  
  @ModelField()
  CategoryName!: string;
  
  
  @ModelField()
  Description?: string;
  
  
  @ModelField()
  Picture?: ArrayBuffer;
  
  
  @ModelField()
  Products?: ProductCollection<Product, ProductModel<Product>>;
  public getProducts({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Product>('Products', {asEntity, ...options}) as Observable<ProductCollection<Product, ProductModel<Product>>>;
  }
  public setProducts(model: ProductCollection<Product, ProductModel<Product>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Product>('Products', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}