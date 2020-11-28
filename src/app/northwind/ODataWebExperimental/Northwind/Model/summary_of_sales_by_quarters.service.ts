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
import { SummaryOfSalesByQuarter } from '../../../NorthwindModel/summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterModel } from '../../../NorthwindModel/summary_of_sales_by_quarter.model';
import { SummaryOfSalesByQuarterCollection } from '../../../NorthwindModel/summary_of_sales_by_quarter.collection';
//#endregion

@Injectable()
export class SummaryOfSalesByQuartersService extends ODataEntityService<SummaryOfSalesByQuarter> {
  constructor(protected client: ODataClient) {
    super(client, 'Summary_of_Sales_by_Quarters', 'NorthwindModel.Summary_of_Sales_by_Quarter');
  }

  //#region ODataApi Model
  summaryOfSalesByQuarterModel(): SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter> {
    return this.entity().asModel() as SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>;
  }
  //#endregion
  //#region ODataApi Collection
  summaryOfSalesByQuarterCollection(): SummaryOfSalesByQuarterCollection<SummaryOfSalesByQuarter, SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>> {
    return this.entities().asCollection() as SummaryOfSalesByQuarterCollection<SummaryOfSalesByQuarter, SummaryOfSalesByQuarterModel<SummaryOfSalesByQuarter>>;
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
