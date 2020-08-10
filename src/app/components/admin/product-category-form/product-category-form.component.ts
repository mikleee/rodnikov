import {Component, Input, OnInit} from '@angular/core';
import {ProductCategoryView} from "../admin.models";

@Component({
  selector: 'app-product-category-form',
  templateUrl: './product-category-form.component.html',
  styleUrls: ['./product-category-form.component.scss', '../admin.component.scss']
})
export class ProductCategoryFormComponent implements OnInit {
  @Input() category: ProductCategoryView

  constructor() {
  }

  ngOnInit(): void {
  }

}
