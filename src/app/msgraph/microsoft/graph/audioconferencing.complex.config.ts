﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AudioConferencing } from './audioconferencing.complex';
import { AudioConferencingModel } from './audioconferencing.model';
import { AudioConferencingCollection } from './audioconferencing.collection';
//#endregion

export const AudioConferencingConfig = {
  name: "audioConferencing",
  model: AudioConferencingModel,
  collection: AudioConferencingCollection,
  annotations: [],
  fields: {
    conferenceId: {type: 'Edm.String'},
    dialinUrl: {type: 'Edm.String'},
    tollFreeNumber: {type: 'Edm.String'},
    tollNumber: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AudioConferencing>;