﻿import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { WorkbookCommentReply } from './workbookcommentreply.entity';
import { WorkbookCommentReplyModel } from './workbookcommentreply.model';
//#endregion

export class WorkbookCommentReplyCollection<E extends WorkbookCommentReply, M extends WorkbookCommentReplyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}