﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Address } from './address.complex';
import { Person } from './person.entity';
import { PersonDetail } from './persondetail.entity';
import { AddressModel } from './address.model';
import { PersonModel } from './person.model';
import { AddressCollection } from './address.collection';
import { PersonCollection } from './person.collection';
import { PersonDetailCollection } from './persondetail.collection';
//#endregion

export class PersonDetailModel<E extends PersonDetail> extends ODataModel<E> {
  //#region ODataApi Properties
  PersonID!: number;
  Age!: number;
  Gender!: boolean;
  Phone?: string;
  Address?: AddressModel<Address>;
  Photo!: any;
  Person?: PersonModel<Person>;
  //#endregion
  //#region ODataApi Setters
  public setPerson(model: PersonModel<Person> | null, options?: HttpOptions) {
    return this._setReference<Person>('Person', model, options);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}