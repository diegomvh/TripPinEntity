﻿import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CitacionConParticipante } from './citacionconparticipante.entity';
import { CitacionConParticipanteCollection } from './citacionconparticipante.collection';
//#endregion

export class CitacionConParticipanteModel<E extends CitacionConParticipante> extends ODataModel<E> {
  //#region ODataApi Properties
  id: number;
  fechaImpresion: Date;
  requirentes?: string;
  involucrados?: string;
  tipo?: string;
  rev?: ArrayBuffer;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}