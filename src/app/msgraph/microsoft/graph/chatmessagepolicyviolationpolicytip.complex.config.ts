﻿import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.complex';
import { ChatMessagePolicyViolationPolicyTipModel } from './chatmessagepolicyviolationpolicytip.model';
import { ChatMessagePolicyViolationPolicyTipCollection } from './chatmessagepolicyviolationpolicytip.collection';
//#endregion

export const ChatMessagePolicyViolationPolicyTipConfig = {
  name: "chatMessagePolicyViolationPolicyTip",
  model: ChatMessagePolicyViolationPolicyTipModel,
  collection: ChatMessagePolicyViolationPolicyTipCollection,
  annotations: [],
  fields: {
    complianceUrl: {type: 'Edm.String'},
    generalText: {type: 'Edm.String'},
    matchedConditionDescriptions: {type: 'Edm.String', collection: true}
  }
} as StructuredTypeConfig<ChatMessagePolicyViolationPolicyTip>;