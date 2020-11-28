﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Empleado } from './empleado.entity';
import { EmpleadoModel } from './empleado.model';
import { EmpleadoCollection } from './empleado.collection';
//#endregion

export const EmpleadoConfig = {
  name: "Empleado",
  model: EmpleadoModel,
  collection: EmpleadoCollection,
  annotations: [],
  fields: {
    tipoIdentificacionId: {type: 'Edm.Int32'},
    localidadId: {type: 'Edm.Int32'},
    categoriaId: {type: 'Edm.Int32', nullable: false},
    nombres: {type: 'Edm.String', nullable: false, maxLength: 40},
    apellidos: {type: 'Edm.String', nullable: false, maxLength: 40},
    documento: {type: 'Edm.String', maxLength: 11},
    direccion: {type: 'Edm.String', maxLength: 120},
    telefono: {type: 'Edm.String', maxLength: 30},
    sexo: {type: 'Edm.String', nullable: false, maxLength: 1},
    habilitado: {type: 'Edm.Boolean'},
    usuario: {type: 'Edm.String', maxLength: 25},
    creationDate: {type: 'Edm.DateTimeOffset'},
    lastLoginDate: {type: 'Edm.DateTimeOffset'},
    notificarNovedad: {type: 'Edm.Boolean'},
    guid: {type: 'Edm.Guid', nullable: false},
    denominacion: {type: 'Edm.String'},
    email: {type: 'Edm.String'},
    id: {type: 'Edm.Int32', key: true, ref: 'id', nullable: false},
    rev: {type: 'Edm.Binary'},
    key: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    shortname: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    longname: {type: 'Edm.String'},
    categoria: {type: 'SIU.Personas.CategoriaEmpleado', navigation: true},
    tipoIdentificacion: {type: 'SIU.Personas.TipoIdentificacion', navigation: true, field: 'tipoIdentificacionId', ref: 'id'},
    localidad: {type: 'SIU.Lugares.Localidad', navigation: true, field: 'localidadId', ref: 'id'},
    avenimientos: {type: 'SIU.Tramites.Avenimiento', collection: true, navigation: true},
    intervenciones: {type: 'SIU.Tramites.Intervencion', collection: true, navigation: true},
    expedientes: {type: 'SIU.Tramites.Expediente', collection: true, navigation: true},
    citas: {type: 'SIU.Agenda.Cita', collection: true, navigation: true},
    citaciones: {type: 'SIU.Tramites.Citacion', collection: true, navigation: true},
    declaracionesJuradas: {type: 'SIU.Personas.DeclaracionJurada', collection: true, navigation: true},
    historicoResponsables: {type: 'SIU.Tramites.HistoricoResponsable', collection: true, navigation: true},
    escritos: {type: 'SIU.Tramites.Escrito', collection: true, navigation: true},
    registros: {type: 'SIU.Tramites.Escrito', collection: true, navigation: true},
    historicoAbogadoPersonas: {type: 'SIU.Tramites.HistoricoAbogadoPersona', collection: true, navigation: true},
    movimientoExpedientes: {type: 'SIU.Tramites.MovimientoExpediente', collection: true, navigation: true},
    requirenteAvenimientoes: {type: 'SIU.Tramites.RequirenteAvenimiento', collection: true, navigation: true},
    requirenteOficinas: {type: 'SIU.Personas.RequirenteOficina', collection: true, navigation: true},
    rolRequirenteEmpleadoExpedientes: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true},
    rolRequirenteEmpleadoExpedientesReg: {type: 'SIU.Tramites.RequirenteExpediente', collection: true, navigation: true},
    rolRequirenteCasos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    rolRequirenteCasosAlternativos: {type: 'SIU.Tramites.RequirenteCaso', collection: true, navigation: true},
    toDos: {type: 'SIU.Gestion.ToDo', collection: true, navigation: true},
    oficinas: {type: 'SIU.Lugares.Oficina', collection: true, navigation: true},
    notasDeAvenimiento: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    notaAvenimientosAltas: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    notaAvenimientosReferentes: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    notaAvenimientosSubResponsables: {type: 'SIU.Tramites.NotaAvenimiento', collection: true, navigation: true},
    audienciasAlta: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true},
    audienciasModificadas: {type: 'SIU.Tramites.Audiencia', collection: true, navigation: true},
    requirentesEnEsperaAtencion: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirentesEnEsperaReferente: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirentesEnEsperaSubResponsable: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirentesEnEsperaResponsable: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    requirentesEnEsperaAtendiendo: {type: 'SIU.Personas.RequirenteEnEspera', collection: true, navigation: true},
    casosResponsable: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    casosReferente: {type: 'SIU.Tramites.Caso', collection: true, navigation: true},
    casosSubResponsable: {type: 'SIU.Tramites.EmpleadoCaso', collection: true, navigation: true},
    autorizantesCita: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    autorizadosCita: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    autorizantes: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    autorizados: {type: 'SIU.Personas.Empleado', collection: true, navigation: true},
    recursos: {type: 'SIU.Recursos.RecursoUsuario', collection: true, navigation: true}
  }
} as EntityConfig<Empleado>;