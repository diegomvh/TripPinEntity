﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { PatternedRecurrence } from './patternedrecurrence.entity';
import { RecurrencePattern } from './recurrencepattern.entity';
import { RecurrenceRange } from './recurrencerange.entity';
import { PatternedRecurrenceModel } from './patternedrecurrence.model';
import { RecurrencePatternModel } from './recurrencepattern.model';
import { RecurrenceRangeModel } from './recurrencerange.model';
import { RecurrencePatternCollection } from './recurrencepattern.collection';
import { RecurrenceRangeCollection } from './recurrencerange.collection';
//#endregion

export class PatternedRecurrenceCollection<E extends PatternedRecurrence, M extends PatternedRecurrenceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}