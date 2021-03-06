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
import { Region } from './region.entity';
import { Territory } from './territory.entity';
import { TerritoryModel } from './territory.model';
import { RegionCollection } from './region.collection';
import { TerritoryCollection } from './territory.collection';
//#endregion

@Model()
export class RegionModel<E extends Region> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  RegionID!: number;
  
  
  @ModelField()
  RegionDescription!: string;
  
  
  @ModelField()
  Territories?: TerritoryCollection<Territory, TerritoryModel<Territory>>;
  public getTerritories({asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.getReference<Territory>('Territories', {asEntity, ...options}) as Observable<TerritoryCollection<Territory, TerritoryModel<Territory>>>;
  }
  public setTerritories(model: TerritoryCollection<Territory, TerritoryModel<Territory>> | null, {asEntity, ...options}: {asEntity?: boolean} & HttpOptions = {}) {
    return this.setReference<Territory>('Territories', model, {asEntity, ...options});
  }
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}