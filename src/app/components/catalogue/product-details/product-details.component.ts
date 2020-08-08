import {Component, OnInit} from '@angular/core';
import {Product} from "../catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue.service";

@Component({
  selector: 'app-product',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let id = Number(params.get('id'));
      this.product = this.productsService.getProduct(id);
    });
  }

}
