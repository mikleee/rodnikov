import {Component, Input, OnInit} from '@angular/core';
import {ProductSubCategoryView} from "../admin.models";

@Component({
  selector: 'app-product-subcategory-form',
  templateUrl: './product-subcategory-form.component.html',
  styleUrls: ['./product-subcategory-form.component.scss', '../admin.component.scss']
})
export class ProductSubcategoryFormComponent implements OnInit {
  @Input() subcategory: ProductSubCategoryView;

  constructor() {
  }

  ngOnInit(): void {
  }

}
