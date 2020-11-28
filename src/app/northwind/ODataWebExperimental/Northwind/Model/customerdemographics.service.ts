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
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { CustomerDemographicModel } from '../../../NorthwindModel/customerdemographic.model';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customerdemographic.collection';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
//#endregion

@Injectable()
export class CustomerDemographicsService extends ODataEntityService<CustomerDemographic> {
  constructor(protected client: ODataClient) {
    super(client, 'CustomerDemographics', 'NorthwindModel.CustomerDemographic');
  }

  //#region ODataApi Model
  customerDemographicModel(): CustomerDemographicModel<CustomerDemographic> {
    return super.model() as CustomerDemographicModel<CustomerDemographic>;
  }
  //#endregion
  //#region ODataApi Collection
  customerDemographicCollection(): CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> {
    return super.collection() as CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public customers(entity: EntityKey<CustomerDemographic>): ODataNavigationPropertyResource<Customer> {
    return this.entity(entity).navigationProperty<Customer>('Customers');
  }
  //#endregion
}
