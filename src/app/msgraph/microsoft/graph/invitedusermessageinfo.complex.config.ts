﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { InvitedUserMessageInfo } from './invitedusermessageinfo.complex';
import { InvitedUserMessageInfoModel } from './invitedusermessageinfo.model';
import { InvitedUserMessageInfoCollection } from './invitedusermessageinfo.collection';
//#endregion

export const InvitedUserMessageInfoConfig = {
  name: "invitedUserMessageInfo",
  model: InvitedUserMessageInfoModel,
  collection: InvitedUserMessageInfoCollection,
  annotations: [],
  fields: {
    ccRecipients: {type: 'graph.recipient', collection: true},
    customizedMessageBody: {type: 'Edm.String'},
    messageLanguage: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<InvitedUserMessageInfo>;