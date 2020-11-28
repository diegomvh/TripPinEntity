﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChoiceColumn } from './choicecolumn.entity';
import { ChoiceColumnModel } from './choicecolumn.model';
import { ChoiceColumnCollection } from './choicecolumn.collection';
//#endregion

export const ChoiceColumnConfig = {
  name: "choiceColumn",
  model: ChoiceColumnModel,
  collection: ChoiceColumnCollection,
  annotations: [],
  fields: {
    allowTextEntry: {type: 'Edm.Boolean'},
    choices: {type: 'Edm.String', collection: true},
    displayAs: {type: 'Edm.String'}
  }
} as EntityConfig<ChoiceColumn>;