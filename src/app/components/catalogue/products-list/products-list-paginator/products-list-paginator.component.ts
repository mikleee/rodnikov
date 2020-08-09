import {Component, Input, OnInit} from '@angular/core';
import {MatPaginatorIntl} from "@angular/material/paginator";
import {AngularMaterialPagination, SortOptions} from "../../../../model/models";

const PAGINATOR = new MatPaginatorIntl();
PAGINATOR.itemsPerPageLabel = 'Продуктов на странице';
PAGINATOR.getRangeLabel = (page, size, length) => `${page * size + 1}-${(page + 1) * size} из ${length}`;


@Component({
  selector: 'app-products-list-paginator',
  templateUrl: './products-list-paginator.component.html',
  styleUrls: ['./products-list-paginator.component.scss'],
  providers: [
    {provide: MatPaginatorIntl, useValue: PAGINATOR}
  ]
})
export class ProductsListPaginatorComponent implements OnInit {
  @Input() pagination: AngularMaterialPagination;
  @Input() sortOptions: SortOptions;


  constructor() {
  }

  ngOnInit(): void {
  }

  onPaginationEvent(event) {
    if (event) {
      this.pagination.pageNo = event.pageIndex;
      this.pagination.pageSize = event.pageSize;
    }
    this.pagination.onPaginationEvent(event);
  }

}
