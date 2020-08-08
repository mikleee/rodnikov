import {Component, OnInit} from '@angular/core';
import {Product} from "../catalogue/catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue/catalogue.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: Product[];

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService) {
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let query = String(params.get('query'));
      this.products = this.productsService.findProductByCriteria(query);
    });
  }

}
