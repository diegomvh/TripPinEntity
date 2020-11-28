﻿import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataSingletonService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { AssignedLicense } from './assignedlicense.entity';
import { AssignedPlan } from './assignedplan.entity';
import { ObjectIdentity } from './objectidentity.entity';
import { LicenseAssignmentState } from './licenseassignmentstate.entity';
import { OnPremisesExtensionAttributes } from './onpremisesextensionattributes.entity';
import { OnPremisesProvisioningError } from './onpremisesprovisioningerror.entity';
import { PasswordProfile } from './passwordprofile.entity';
import { ProvisionedPlan } from './provisionedplan.entity';
import { MailboxSettings } from './mailboxsettings.entity';
import { DirectoryObject } from './directoryobject.entity';
import { User } from './user.entity';
import { AppRoleAssignment } from './approleassignment.entity';
import { LicenseDetails } from './licensedetails.entity';
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { Calendar } from './calendar.entity';
import { CalendarGroup } from './calendargroup.entity';
import { Event } from './event.entity';
import { ContactFolder } from './contactfolder.entity';
import { Contact } from './contact.entity';
import { InferenceClassification } from './inferenceclassification.entity';
import { MailFolder } from './mailfolder.entity';
import { Message } from './message.entity';
import { OutlookUser } from './outlookuser.entity';
import { Person } from './person.entity';
import { ProfilePhoto } from './profilephoto.entity';
import { Drive } from './drive.entity';
import { Site } from './site.entity';
import { Extension } from './extension.entity';
import { ManagedDevice } from './manageddevice.entity';
import { ManagedAppRegistration } from './managedappregistration.entity';
import { DeviceManagementTroubleshootingEvent } from './devicemanagementtroubleshootingevent.entity';
import { PlannerUser } from './planneruser.entity';
import { OfficeGraphInsights } from './officegraphinsights.entity';
import { UserSettings } from './usersettings.entity';
import { Onenote } from './onenote.entity';
import { UserActivity } from './useractivity.entity';
import { OnlineMeeting } from './onlinemeeting.entity';
import { Team } from './team.entity';
import { AssignedLicenseModel } from './assignedlicense.model';
import { AssignedPlanModel } from './assignedplan.model';
import { ObjectIdentityModel } from './objectidentity.model';
import { LicenseAssignmentStateModel } from './licenseassignmentstate.model';
import { OnPremisesExtensionAttributesModel } from './onpremisesextensionattributes.model';
import { OnPremisesProvisioningErrorModel } from './onpremisesprovisioningerror.model';
import { PasswordProfileModel } from './passwordprofile.model';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { MailboxSettingsModel } from './mailboxsettings.model';
import { DirectoryObjectModel } from './directoryobject.model';
import { UserModel } from './user.model';
import { AppRoleAssignmentModel } from './approleassignment.model';
import { LicenseDetailsModel } from './licensedetails.model';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
import { CalendarModel } from './calendar.model';
import { CalendarGroupModel } from './calendargroup.model';
import { EventModel } from './event.model';
import { ContactFolderModel } from './contactfolder.model';
import { ContactModel } from './contact.model';
import { InferenceClassificationModel } from './inferenceclassification.model';
import { MailFolderModel } from './mailfolder.model';
import { MessageModel } from './message.model';
import { OutlookUserModel } from './outlookuser.model';
import { PersonModel } from './person.model';
import { ProfilePhotoModel } from './profilephoto.model';
import { DriveModel } from './drive.model';
import { SiteModel } from './site.model';
import { ExtensionModel } from './extension.model';
import { ManagedDeviceModel } from './manageddevice.model';
import { ManagedAppRegistrationModel } from './managedappregistration.model';
import { DeviceManagementTroubleshootingEventModel } from './devicemanagementtroubleshootingevent.model';
import { PlannerUserModel } from './planneruser.model';
import { OfficeGraphInsightsModel } from './officegraphinsights.model';
import { UserSettingsModel } from './usersettings.model';
import { OnenoteModel } from './onenote.model';
import { UserActivityModel } from './useractivity.model';
import { OnlineMeetingModel } from './onlinemeeting.model';
import { TeamModel } from './team.model';
import { AssignedLicenseCollection } from './assignedlicense.collection';
import { AssignedPlanCollection } from './assignedplan.collection';
import { ObjectIdentityCollection } from './objectidentity.collection';
import { LicenseAssignmentStateCollection } from './licenseassignmentstate.collection';
import { OnPremisesExtensionAttributesCollection } from './onpremisesextensionattributes.collection';
import { OnPremisesProvisioningErrorCollection } from './onpremisesprovisioningerror.collection';
import { PasswordProfileCollection } from './passwordprofile.collection';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
import { MailboxSettingsCollection } from './mailboxsettings.collection';
import { DirectoryObjectCollection } from './directoryobject.collection';
import { UserCollection } from './user.collection';
import { AppRoleAssignmentCollection } from './approleassignment.collection';
import { LicenseDetailsCollection } from './licensedetails.collection';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
import { CalendarCollection } from './calendar.collection';
import { CalendarGroupCollection } from './calendargroup.collection';
import { EventCollection } from './event.collection';
import { ContactFolderCollection } from './contactfolder.collection';
import { ContactCollection } from './contact.collection';
import { InferenceClassificationCollection } from './inferenceclassification.collection';
import { MailFolderCollection } from './mailfolder.collection';
import { MessageCollection } from './message.collection';
import { OutlookUserCollection } from './outlookuser.collection';
import { PersonCollection } from './person.collection';
import { ProfilePhotoCollection } from './profilephoto.collection';
import { DriveCollection } from './drive.collection';
import { SiteCollection } from './site.collection';
import { ExtensionCollection } from './extension.collection';
import { ManagedDeviceCollection } from './manageddevice.collection';
import { ManagedAppRegistrationCollection } from './managedappregistration.collection';
import { DeviceManagementTroubleshootingEventCollection } from './devicemanagementtroubleshootingevent.collection';
import { PlannerUserCollection } from './planneruser.collection';
import { OfficeGraphInsightsCollection } from './officegraphinsights.collection';
import { UserSettingsCollection } from './usersettings.collection';
import { OnenoteCollection } from './onenote.collection';
import { UserActivityCollection } from './useractivity.collection';
import { OnlineMeetingCollection } from './onlinemeeting.collection';
import { TeamCollection } from './team.collection';
//#endregion

@Injectable()
export class MeService extends ODataSingletonService<User> {
  constructor(protected client: ODataClient) {
    super(client, 'me', 'microsoft.graph.user');
  }
  
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}