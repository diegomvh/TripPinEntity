﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { ChatMessagePolicyViolationDlpActionTypes } from './chatmessagepolicyviolationdlpactiontypes.enum';
import { ChatMessagePolicyViolationUserActionTypes } from './chatmessagepolicyviolationuseractiontypes.enum';
import { ChatMessagePolicyViolationVerdictDetailsTypes } from './chatmessagepolicyviolationverdictdetailstypes.enum';
import { ChatMessagePolicyViolationPolicyTip } from './chatmessagepolicyviolationpolicytip.entity';
//#endregion

export interface ChatMessagePolicyViolation {
  //#region ODataApi Properties
  dlpAction?: ChatMessagePolicyViolationDlpActionTypes;
  justificationText?: string;
  policyTip?: ChatMessagePolicyViolationPolicyTip;
  userAction?: ChatMessagePolicyViolationUserActionTypes;
  verdictDetails?: ChatMessagePolicyViolationVerdictDetailsTypes;
  //#endregion
}