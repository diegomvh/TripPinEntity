import { Component, OnInit } from '@angular/core';
import { Airline, AirlinesService } from '../../trippin';
import { ODataEntitySetResource, ODataClient, Alias } from 'angular-odata';

@Component({
  selector: 'trip-airlines',
  template: `<p-table #table [columns]="cols" [value]="rows" [lazy]="true" (onLazyLoad)="loadPeopleLazy($event)" [paginator]="true" 
    [rows]="size" [totalRecords]="total" [loading]="loading">
    <ng-template pTemplate="header" let-columns>
        <tr>
            <th *ngFor="let col of columns" [pSortableColumn]="col.sort ? col.field : ''">
              {{col.header}}
              <p-sortIcon *ngIf="col.sort" [field]="col.field" ariaLabel="Activate to sort" ariaLabelDesc="Activate to sort in descending order" ariaLabelAsc="Activate to sort in ascending order"></p-sortIcon>
            </th>
        </tr>
        <tr>
            <th *ngFor="let col of columns" [ngSwitch]="col.field">
              <input *ngIf="col.filter" pInputText type="text" (input)="filter($event.target.value, col.field)">
            </th>
        </tr>
    </ng-template>
    <ng-template pTemplate="body" let-rowData let-columns="columns">
        <tr>
            <td *ngFor="let col of columns">
                {{rowData[col.field]}}
            </td>
        </tr>
    </ng-template>
</p-table>`,
})
export class AirlinesComponent implements OnInit {
  rows: Airline[];
  cols: any[];

  total: number;
  size: number;

  resource: ODataEntitySetResource<Airline>;
  loading: boolean;
  alias: Alias;

  constructor(
    private client: ODataClient,
    private airlines: AirlinesService
  ) { 
    this.resource = this.airlines.entities();
    // Try toJSON, fromJSON
    this.resource = this.client.fromJSON<ODataEntitySetResource<Airline>>(this.resource.toJSON());
    this.alias = this.resource.alias("alias");
  }

  ngOnInit() {
    this.cols = this.resource.config.fields()
      .filter(f => !f.navigation)
      .map(f => ({ field: f.name, header: f.name, sort: !f.collection, filter: f.type === 'Edm.String' }));
    this.loading = true;
  }

  fetch(resource: ODataEntitySetResource<Airline>) {
    this.loading = true;
    resource.get({withCount: true}).subscribe(({entities, meta}) => {
      this.rows = entities;
      if (!this.total)
        this.total = meta.count;
      if (!this.size)
        this.size = meta.skip || entities.length;
      this.loading = false;
    });
  }

  filter(value: string, field: string) {
    field = `tolower(${field})`; 
    if (value) {
      this.alias.value = value.toLowerCase();
      let filter = {[field]: {contains: this.alias}};
      this.resource.query.filter().assign(filter);
    } else {
      this.resource.query.filter().unset(field);
    }
    this.total = 0;
    this.fetch(this.resource);
  }

  loadPeopleLazy(event) {
    //Pagination
    let resource = this.resource.skip(event.first).top(event.rows);
    //Ordering
    if (event.sortField)
      resource = resource.orderBy([[event.sortField, event.sortOrder == -1 ? "desc": "asc"]]);
    this.fetch(resource);
  }
}