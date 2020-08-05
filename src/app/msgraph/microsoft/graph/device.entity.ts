﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DirectoryObject } from './directoryobject.entity';
import { AlternativeSecurityId } from './alternativesecurityid.entity';
import { Extension } from './extension.entity';
//#endregion

export interface Device extends DirectoryObject {
  //#region ODataApi Properties
  accountEnabled?: boolean;
  alternativeSecurityIds: AlternativeSecurityId[];
  approximateLastSignInDateTime?: Date;
  complianceExpirationDateTime?: Date;
  deviceId?: string;
  deviceMetadata?: string;
  deviceVersion?: number;
  displayName?: string;
  isCompliant?: boolean;
  isManaged?: boolean;
  mdmAppId?: string;
  onPremisesLastSyncDateTime?: Date;
  onPremisesSyncEnabled?: boolean;
  operatingSystem?: string;
  operatingSystemVersion?: string;
  physicalIds: string[];
  profileType?: string;
  systemLabels: string[];
  trustType?: string;
  memberOf?: DirectoryObject[];
  registeredOwners?: DirectoryObject[];
  registeredUsers?: DirectoryObject[];
  transitiveMemberOf?: DirectoryObject[];
  extensions?: Extension[];
  //#endregion
}