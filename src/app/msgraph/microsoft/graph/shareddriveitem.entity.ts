﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { IdentitySet } from './identityset.entity';
import { Site } from './site.entity';
import { DriveItem } from './driveitem.entity';
import { List } from './list.entity';
import { ListItem } from './listitem.entity';
import { Permission } from './permission.entity';
import { IdentitySetModel } from './identityset.model';
import { BaseItemModel } from './baseitem.model';
import { SiteModel } from './site.model';
import { DriveItemModel } from './driveitem.model';
import { ListModel } from './list.model';
import { ListItemModel } from './listitem.model';
import { PermissionModel } from './permission.model';
import { IdentitySetCollection } from './identityset.collection';
import { BaseItemCollection } from './baseitem.collection';
import { SiteCollection } from './site.collection';
import { DriveItemCollection } from './driveitem.collection';
import { ListCollection } from './list.collection';
import { ListItemCollection } from './listitem.collection';
import { PermissionCollection } from './permission.collection';
//#endregion

export interface SharedDriveItem extends BaseItem {
  //#region ODataApi Properties
  owner?: IdentitySet;
  driveItem?: DriveItem;
  items?: DriveItem[];
  list?: List;
  listItem?: ListItem;
  permission?: Permission;
  root?: DriveItem;
  site?: Site;
  //#endregion
}