﻿import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { BaseItem } from './baseitem.entity';
import { GeoCoordinates } from './geocoordinates.entity';
import { SharepointIds } from './sharepointids.entity';
import { Audio } from './audio.entity';
import { Deleted } from './deleted.entity';
import { File } from './file.entity';
import { FileSystemInfo } from './filesysteminfo.entity';
import { Folder } from './folder.entity';
import { Image } from './image.entity';
import { Package } from './package.entity';
import { PendingOperations } from './pendingoperations.entity';
import { Photo } from './photo.entity';
import { PublicationFacet } from './publicationfacet.entity';
import { RemoteItem } from './remoteitem.entity';
import { Shared } from './shared.entity';
import { SpecialFolder } from './specialfolder.entity';
import { Video } from './video.entity';
import { Root } from './root.entity';
import { SearchResult } from './searchresult.entity';
import { Workbook } from './workbook.entity';
import { ItemAnalytics } from './itemanalytics.entity';
import { ListItem } from './listitem.entity';
import { Permission } from './permission.entity';
import { Subscription } from './subscription.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { DriveItemVersion } from './driveitemversion.entity';
import { GeoCoordinatesModel } from './geocoordinates.model';
import { SharepointIdsModel } from './sharepointids.model';
import { AudioModel } from './audio.model';
import { DeletedModel } from './deleted.model';
import { FileModel } from './file.model';
import { FileSystemInfoModel } from './filesysteminfo.model';
import { FolderModel } from './folder.model';
import { ImageModel } from './image.model';
import { PackageModel } from './package.model';
import { PendingOperationsModel } from './pendingoperations.model';
import { PhotoModel } from './photo.model';
import { PublicationFacetModel } from './publicationfacet.model';
import { RemoteItemModel } from './remoteitem.model';
import { SharedModel } from './shared.model';
import { SpecialFolderModel } from './specialfolder.model';
import { VideoModel } from './video.model';
import { RootModel } from './root.model';
import { SearchResultModel } from './searchresult.model';
import { BaseItemModel } from './baseitem.model';
import { DriveItemModel } from './driveitem.model';
import { WorkbookModel } from './workbook.model';
import { ItemAnalyticsModel } from './itemanalytics.model';
import { ListItemModel } from './listitem.model';
import { PermissionModel } from './permission.model';
import { SubscriptionModel } from './subscription.model';
import { ThumbnailSetModel } from './thumbnailset.model';
import { DriveItemVersionModel } from './driveitemversion.model';
import { GeoCoordinatesCollection } from './geocoordinates.collection';
import { SharepointIdsCollection } from './sharepointids.collection';
import { AudioCollection } from './audio.collection';
import { DeletedCollection } from './deleted.collection';
import { FileCollection } from './file.collection';
import { FileSystemInfoCollection } from './filesysteminfo.collection';
import { FolderCollection } from './folder.collection';
import { ImageCollection } from './image.collection';
import { PackageCollection } from './package.collection';
import { PendingOperationsCollection } from './pendingoperations.collection';
import { PhotoCollection } from './photo.collection';
import { PublicationFacetCollection } from './publicationfacet.collection';
import { RemoteItemCollection } from './remoteitem.collection';
import { SharedCollection } from './shared.collection';
import { SpecialFolderCollection } from './specialfolder.collection';
import { VideoCollection } from './video.collection';
import { RootCollection } from './root.collection';
import { SearchResultCollection } from './searchresult.collection';
import { BaseItemCollection } from './baseitem.collection';
import { DriveItemCollection } from './driveitem.collection';
import { WorkbookCollection } from './workbook.collection';
import { ItemAnalyticsCollection } from './itemanalytics.collection';
import { ListItemCollection } from './listitem.collection';
import { PermissionCollection } from './permission.collection';
import { SubscriptionCollection } from './subscription.collection';
import { ThumbnailSetCollection } from './thumbnailset.collection';
import { DriveItemVersionCollection } from './driveitemversion.collection';
//#endregion

export interface DriveItem extends BaseItem {
  //#region ODataApi Properties
  audio?: Audio;
  content?: any;
  cTag?: string;
  deleted?: Deleted;
  file?: File;
  fileSystemInfo?: FileSystemInfo;
  folder?: Folder;
  image?: Image;
  location?: GeoCoordinates;
  package?: Package;
  pendingOperations?: PendingOperations;
  photo?: Photo;
  publication?: PublicationFacet;
  remoteItem?: RemoteItem;
  root?: Root;
  searchResult?: SearchResult;
  shared?: Shared;
  sharepointIds?: SharepointIds;
  size?: number;
  specialFolder?: SpecialFolder;
  video?: Video;
  webDavUrl?: string;
  workbook?: Workbook;
  analytics?: ItemAnalytics;
  children?: DriveItem[];
  listItem?: ListItem;
  permissions?: Permission[];
  subscriptions?: Subscription[];
  thumbnails?: ThumbnailSet[];
  versions?: DriveItemVersion[];
  //#endregion
}