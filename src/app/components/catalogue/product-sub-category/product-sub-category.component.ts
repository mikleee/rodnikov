import {Component, OnInit} from '@angular/core';
import {ProductSubCategory} from "../catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-product-sub-category',
  templateUrl: './product-sub-category.component.html',
  styleUrls: ['./product-sub-category.component.scss']
})
export class ProductSubCategoryComponent implements OnInit {

  subCategory: ProductSubCategory;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('subCategoryId'));
      this.subCategory = this.productsService.getSubCategory(id);
    });

  }

}
