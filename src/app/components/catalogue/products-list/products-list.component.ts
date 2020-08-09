import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../catalogue.model";
import {AngularMaterialPagination, SortOption, SortOptions} from "../../../model/models";


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit, OnChanges {
  @Input() products: Product[];

  page: Product[];

  pagination = new AngularMaterialPagination();
  sortOptions = new SortOptions([
    {label: 'Исходная сортировка', value: 'initial', active: true},
    {label: 'Сначала дешёвые', value: 'cheapest'},
    {label: 'Сначала дорогие', value: 'most expensive'},
  ]);

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.pagination.total = this.products.length;
    this.sortOptions.doSort(null);
  }

  ngOnInit(): void {
    this.pagination.onPaginationEvent = (event) => {
      this.page = [];
      for (let i = this.pagination.pageNo * this.pagination.pageSize; this.page.length < this.pagination.pageSize && i < this.products.length; i++) {
        this.page.push(this.products[i]);
      }
    };
    this.sortOptions.onSort = (sortOption: SortOption) => {
      let fn;
      if (sortOption.value == 'cheapest') {
        fn = (a, b) => a.price - b.price;
      } else if (sortOption.value == 'most expensive') {
        fn = (a, b) => b.price - a.price;
      } else {
        fn = (a, b) => a.id - b.id;
      }
      this.products = this.products.sort(fn);
      this.pagination.onPaginationEvent(null);
    };

    this.pagination.total = this.products.length;
    this.sortOptions.doSort(null);
  }


}
