import { PhotoMeta } from './photo.meta';
import { PlanItemMeta } from './planitem.meta';

export const TripMeta = {
  type: "Microsoft.OData.SampleService.Models.TripPin.Trip",
  fields: {
    TripId: {type: 'number', key: true, ref: 'TripId', nullable: false},
    ShareId: {type: 'string'},
    Description: {type: 'string'},
    Name: {type: 'string', nullable: false},
    Budget: {type: 'number', nullable: false},
    StartsAt: {type: 'Date', nullable: false},
    EndsAt: {type: 'Date', nullable: false},
    Tags: {type: 'string', nullable: false, collection: true},
    Photos: {type: 'Microsoft.OData.SampleService.Models.TripPin.Photo', collection: true, navigation: true},
    PlanItems: {type: 'Microsoft.OData.SampleService.Models.TripPin.PlanItem', collection: true, navigation: true}
  }
};