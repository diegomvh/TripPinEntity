﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { BooleanColumn } from './booleancolumn.entity';
import { CalculatedColumn } from './calculatedcolumn.entity';
import { ChoiceColumn } from './choicecolumn.entity';
import { CurrencyColumn } from './currencycolumn.entity';
import { DateTimeColumn } from './datetimecolumn.entity';
import { DefaultColumnValue } from './defaultcolumnvalue.entity';
import { GeolocationColumn } from './geolocationcolumn.entity';
import { LookupColumn } from './lookupcolumn.entity';
import { NumberColumn } from './numbercolumn.entity';
import { PersonOrGroupColumn } from './personorgroupcolumn.entity';
import { TextColumn } from './textcolumn.entity';
import { BooleanColumnModel } from './booleancolumn.model';
import { CalculatedColumnModel } from './calculatedcolumn.model';
import { ChoiceColumnModel } from './choicecolumn.model';
import { CurrencyColumnModel } from './currencycolumn.model';
import { DateTimeColumnModel } from './datetimecolumn.model';
import { DefaultColumnValueModel } from './defaultcolumnvalue.model';
import { GeolocationColumnModel } from './geolocationcolumn.model';
import { LookupColumnModel } from './lookupcolumn.model';
import { NumberColumnModel } from './numbercolumn.model';
import { PersonOrGroupColumnModel } from './personorgroupcolumn.model';
import { TextColumnModel } from './textcolumn.model';
import { EntityModel } from './entity.model';
import { BooleanColumnCollection } from './booleancolumn.collection';
import { CalculatedColumnCollection } from './calculatedcolumn.collection';
import { ChoiceColumnCollection } from './choicecolumn.collection';
import { CurrencyColumnCollection } from './currencycolumn.collection';
import { DateTimeColumnCollection } from './datetimecolumn.collection';
import { DefaultColumnValueCollection } from './defaultcolumnvalue.collection';
import { GeolocationColumnCollection } from './geolocationcolumn.collection';
import { LookupColumnCollection } from './lookupcolumn.collection';
import { NumberColumnCollection } from './numbercolumn.collection';
import { PersonOrGroupColumnCollection } from './personorgroupcolumn.collection';
import { TextColumnCollection } from './textcolumn.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface ColumnDefinition extends Entity {
  //#region ODataApi Properties
  boolean?: BooleanColumn;
  calculated?: CalculatedColumn;
  choice?: ChoiceColumn;
  columnGroup?: string;
  currency?: CurrencyColumn;
  dateTime?: DateTimeColumn;
  defaultValue?: DefaultColumnValue;
  description?: string;
  displayName?: string;
  enforceUniqueValues?: boolean;
  geolocation?: GeolocationColumn;
  hidden?: boolean;
  indexed?: boolean;
  lookup?: LookupColumn;
  name?: string;
  number?: NumberColumn;
  personOrGroup?: PersonOrGroupColumn;
  readOnly?: boolean;
  required?: boolean;
  text?: TextColumn;
  //#endregion
}