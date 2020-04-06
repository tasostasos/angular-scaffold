import {SlicePipe} from '@angular/common';
import {Component, QueryList, ViewChildren} from '@angular/core';
import {Observable} from 'rxjs';

import {User} from '../../data-model/user';
import {UsersFiltersServiceService} from '../../services/users-filters-service.service';
import {NgbdSortableHeader, SortEvent} from '../../directives/sortable.directive';


@Component(
    {selector: 'ngbd-table-complete', templateUrl: './table-complete.component.html', providers: [UsersFiltersServiceService, SlicePipe
    ]})
export class NgbdTableComplete {
  users$: Observable<User[]>;
  total$: Observable<number>;

  @ViewChildren(NgbdSortableHeader) headers: QueryList<NgbdSortableHeader>;

  constructor(public service: UsersFiltersServiceService) {
    this.users$ = service.users$;
    this.total$ = service.total$;
  }

  onSort({column, direction}: SortEvent) {
    // resetting other headers
    this.headers.forEach(header => {
      if (header.sortable !== column) {
        header.direction = '';
      }
    });

    this.service.sortColumn = column;
    this.service.sortDirection = direction;
  }
}