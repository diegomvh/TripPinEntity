﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Asesor } from './asesor.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { AsesorCollection } from './asesor.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
//#endregion

export class AsesorModel<E extends Asesor> extends ODataModel<E> {
  //#region ODataApi Properties
  nombres: string;
  apellidos: string;
  telefono?: string;
  habilitado: boolean;
  guid: string;
  id: number;
  rev?: ArrayBuffer;
  key?: string;
  type?: string;
  shortname?: string;
  name?: string;
  longname?: string;
  expedientes?: ExpedienteCollection<Expediente, ExpedienteModel<Expediente>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}