import {Component, OnInit} from '@angular/core';
import {Product, ProductCategory, ProductSubCategory} from "../catalogue/catalogue.model";
import {ViewState, ViewStateFactoryService} from "../../service/viewStateFactory.service";
import {CatalogueService} from "../catalogue/catalogue.service";
import {UtilService} from "../../util.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sequence: number = 0;
  categories: ProductCategoryView[];
  state: ViewState;

  constructor(private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
  }

  ngOnInit(): void {
    this.util.load(this.productsService.getCategories(), this.state, (result) => {
      this.categories = [];

      result.forEach(c => {
        this.categories.push(new ProductCategoryView(c))

        this.sequence = Math.max(this.sequence, c.id);
        c.subcategories.forEach(sc => {
          this.sequence = Math.max(this.sequence, sc.id);
          sc.products.forEach(p => {
            this.sequence = Math.max(this.sequence, p.id);
          })
        })
      });

    });
  }
}

class ProductCategoryView {
  id?: number;
  name: string;
  image?: ImageView;
  subcategories: ProductSubCategoryView[] = [];
  hidden: boolean = true;

  constructor(src: ProductCategory) {
    this.id = src.id;
    this.name = src.name;
    this.image = src.image == null ? null : new ImageView(src.image);
    src.subcategories.forEach(sc => this.subcategories.push(new ProductSubCategoryView(sc)))
  }
}

class ProductSubCategoryView {
  id?: number;
  name: string;
  image: ImageView;
  products: ProductView[] = [];
  hidden: boolean = true;

  constructor(src: ProductSubCategory) {
    this.id = src.id;
    this.name = src.name;
    this.image = src.image == null ? null : new ImageView(src.image);
    src.products.forEach(p => this.products.push(new ProductView(p)))
  }
}

class ProductView {
  id?: number;
  name: string;
  description?: string;
  price: number;
  priceLower?: number;
  images: ImageView[] = [];
  hidden: boolean = true;

  constructor(src: Product) {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.priceLower = src.priceLower;
    src.images.forEach(i => this.images.push(new ImageView(i)))
  }
}

class ImageView {
  path: string;

  constructor(path: string) {
    this.path = path;
  }
}
