import {Component, OnInit} from '@angular/core';
import {Product} from "../catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue.service";
import {ViewState, ViewStateFactoryService} from "../../../service/viewStateFactory.service";
import {UtilService} from "../../../util.service";

@Component({
  selector: 'app-product',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  state: ViewState;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));

      this.util.load(this.productsService.getProduct(id), this.state, (result) => {
        this.product = result;
        if (this.product == null) {
          this.state.error();
        }
      });

    });
  }

}
