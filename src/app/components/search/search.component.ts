import {Component, OnInit} from '@angular/core';
import {Product} from "../catalogue/catalogue.model";
import {ActivatedRoute} from "@angular/router";
import {CatalogueService} from "../catalogue/catalogue.service";
import {ViewState, ViewStateFactoryService} from "../../service/viewStateFactory.service";
import {UtilService} from "../../util.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  products: Product[];
  state: ViewState;

  constructor(private route: ActivatedRoute,
              private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      let query = String(params.get('query'));

      this.util.load(this.productsService.findProductByCriteria(query), this.state, (result) => {
        this.products = result;
      });
    });
  }


}
