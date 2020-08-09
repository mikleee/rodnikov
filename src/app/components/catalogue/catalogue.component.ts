import {Component, OnInit} from '@angular/core';
import {CatalogueService} from "./catalogue.service";
import {ProductCategory} from "./catalogue.model";
import {ViewState, ViewStateFactoryService} from "../../service/viewStateFactory.service";
import {UtilService} from "../../util.service";

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.scss']
})
export class CatalogueComponent implements OnInit {
  categories: ProductCategory[];
  state: ViewState;

  constructor(private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.util.load(this.productsService.getCategories(), this.state, (result) => {
      this.categories = result;
    });
  }

}
