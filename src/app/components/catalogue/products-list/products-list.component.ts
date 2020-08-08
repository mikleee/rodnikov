import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../catalogue.model";
import {AngularMaterialPagination} from "../../../model/models";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() products: Product[];

  page: Product[];

  pagination = new AngularMaterialPagination();

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pagination.total = this.products.length;
    this.buildPage(null);
  }

  ngOnInit(): void {
    this.pagination.onPaginationEvent = this.paginate;
  }

  buildPage(event) {
    this.sort();
    this.paginate(event);
  }

  private paginate(event) {
    this.page = [];
    for (let i = this.pagination.pageNo * this.pagination.pageSize; this.page.length < this.pagination.pageSize && i < this.products.length; i++) {
      this.page.push(this.products[i]);
    }
  }

  private sort() {

  }


}
