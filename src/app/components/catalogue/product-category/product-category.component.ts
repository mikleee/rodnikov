import {Component, OnInit} from '@angular/core';
import {ProductCategory} from "../catalogue.model";
import {ActivatedRoute} from '@angular/router';
import {CatalogueService} from "../catalogue.service";
import {ViewState, ViewStateFactoryService} from "../../../service/viewStateFactory.service";
import {UtilService} from "../../../util.service";

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.scss']
})
export class ProductCategoryComponent implements OnInit {

  category: ProductCategory;
  state: ViewState;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('categoryId'));
      this.util.load(this.productsService.getCategory(id), this.state, (result) => {
        this.category = result;
        if (this.category == null) {
          this.state.error();
        }
      });
    });
  }

}
