import {Component, OnInit} from '@angular/core';
import {ProductSubCategory} from "../catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue.service";
import {ViewState, ViewStateFactoryService} from "../../../service/viewStateFactory.service";
import {UtilService} from "../../../util.service";

@Component({
  selector: 'app-product-sub-category',
  templateUrl: './product-sub-category.component.html',
  styleUrls: ['./product-sub-category.component.scss']
})
export class ProductSubCategoryComponent implements OnInit {

  subCategory: ProductSubCategory;
  state: ViewState;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('subCategoryId'));
      this.util.load(this.productsService.getSubCategory(id), this.state, (result) => {
        this.subCategory = result;
        if (this.subCategory == null) {
          this.state.error();
        }
      });

    });
  }

}
