﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RecursoUsuario } from '../Recursos/recursousuario.entity';
import { Oficina } from '../Lugares/oficina.entity';
import { Localidad } from '../Lugares/localidad.entity';
import { ToDo } from '../Gestion/todo.entity';
import { Empleado } from './empleado.entity';
import { DeclaracionJurada } from './declaracionjurada.entity';
import { RequirenteEnEspera } from './requirenteenespera.entity';
import { RequirenteOficina } from './requirenteoficina.entity';
import { TipoIdentificacion } from './tipoidentificacion.entity';
import { CategoriaEmpleado } from './categoriaempleado.entity';
import { Caso } from '../Tramites/caso.entity';
import { RequirenteCaso } from '../Tramites/requirentecaso.entity';
import { EmpleadoCaso } from '../Tramites/empleadocaso.entity';
import { RequirenteExpediente } from '../Tramites/requirenteexpediente.entity';
import { Intervencion } from '../Tramites/intervencion.entity';
import { Expediente } from '../Tramites/expediente.entity';
import { Escrito } from '../Tramites/escrito.entity';
import { Audiencia } from '../Tramites/audiencia.entity';
import { Avenimiento } from '../Tramites/avenimiento.entity';
import { RequirenteAvenimiento } from '../Tramites/requirenteavenimiento.entity';
import { NotaAvenimiento } from '../Tramites/notaavenimiento.entity';
import { Citacion } from '../Tramites/citacion.entity';
import { MovimientoExpediente } from '../Tramites/movimientoexpediente.entity';
import { HistoricoResponsable } from '../Tramites/historicoresponsable.entity';
import { HistoricoAbogadoPersona } from '../Tramites/historicoabogadopersona.entity';
import { Cita } from '../Agenda/cita.entity';
import { RecursoUsuarioModel } from '../Recursos/recursousuario.model';
import { OficinaModel } from '../Lugares/oficina.model';
import { LocalidadModel } from '../Lugares/localidad.model';
import { ToDoModel } from '../Gestion/todo.model';
import { EmpleadoModel } from './empleado.model';
import { DeclaracionJuradaModel } from './declaracionjurada.model';
import { RequirenteEnEsperaModel } from './requirenteenespera.model';
import { RequirenteOficinaModel } from './requirenteoficina.model';
import { TipoIdentificacionModel } from './tipoidentificacion.model';
import { CategoriaEmpleadoModel } from './categoriaempleado.model';
import { CasoModel } from '../Tramites/caso.model';
import { RequirenteCasoModel } from '../Tramites/requirentecaso.model';
import { EmpleadoCasoModel } from '../Tramites/empleadocaso.model';
import { RequirenteExpedienteModel } from '../Tramites/requirenteexpediente.model';
import { IntervencionModel } from '../Tramites/intervencion.model';
import { ExpedienteModel } from '../Tramites/expediente.model';
import { EscritoModel } from '../Tramites/escrito.model';
import { AudienciaModel } from '../Tramites/audiencia.model';
import { AvenimientoModel } from '../Tramites/avenimiento.model';
import { RequirenteAvenimientoModel } from '../Tramites/requirenteavenimiento.model';
import { NotaAvenimientoModel } from '../Tramites/notaavenimiento.model';
import { CitacionModel } from '../Tramites/citacion.model';
import { MovimientoExpedienteModel } from '../Tramites/movimientoexpediente.model';
import { HistoricoResponsableModel } from '../Tramites/historicoresponsable.model';
import { HistoricoAbogadoPersonaModel } from '../Tramites/historicoabogadopersona.model';
import { CitaModel } from '../Agenda/cita.model';
import { RecursoUsuarioCollection } from '../Recursos/recursousuario.collection';
import { OficinaCollection } from '../Lugares/oficina.collection';
import { LocalidadCollection } from '../Lugares/localidad.collection';
import { ToDoCollection } from '../Gestion/todo.collection';
import { DeclaracionJuradaCollection } from './declaracionjurada.collection';
import { RequirenteEnEsperaCollection } from './requirenteenespera.collection';
import { RequirenteOficinaCollection } from './requirenteoficina.collection';
import { TipoIdentificacionCollection } from './tipoidentificacion.collection';
import { CategoriaEmpleadoCollection } from './categoriaempleado.collection';
import { CasoCollection } from '../Tramites/caso.collection';
import { RequirenteCasoCollection } from '../Tramites/requirentecaso.collection';
import { EmpleadoCasoCollection } from '../Tramites/empleadocaso.collection';
import { RequirenteExpedienteCollection } from '../Tramites/requirenteexpediente.collection';
import { IntervencionCollection } from '../Tramites/intervencion.collection';
import { ExpedienteCollection } from '../Tramites/expediente.collection';
import { EscritoCollection } from '../Tramites/escrito.collection';
import { AudienciaCollection } from '../Tramites/audiencia.collection';
import { AvenimientoCollection } from '../Tramites/avenimiento.collection';
import { RequirenteAvenimientoCollection } from '../Tramites/requirenteavenimiento.collection';
import { NotaAvenimientoCollection } from '../Tramites/notaavenimiento.collection';
import { CitacionCollection } from '../Tramites/citacion.collection';
import { MovimientoExpedienteCollection } from '../Tramites/movimientoexpediente.collection';
import { HistoricoResponsableCollection } from '../Tramites/historicoresponsable.collection';
import { HistoricoAbogadoPersonaCollection } from '../Tramites/historicoabogadopersona.collection';
import { CitaCollection } from '../Agenda/cita.collection';
//#endregion

export class EmpleadoCollection<E extends Empleado, M extends EmpleadoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}