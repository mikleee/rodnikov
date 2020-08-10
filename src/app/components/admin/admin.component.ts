import {Component, OnInit} from '@angular/core';
import {ViewState, ViewStateFactoryService} from "../../service/viewStateFactory.service";
import {CatalogueService} from "../catalogue/catalogue.service";
import {UtilService} from "../../util.service";
import {ImageView, ProductCategoryView, ProductSubCategoryView, ProductView} from "./admin.models";
import {Product, ProductCategory, ProductSubCategory} from "../catalogue/catalogue.model";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sequence: number = 0;
  categories: ProductCategoryView[];
  state: ViewState;
  submissionState: ViewState;

  category: ProductCategoryView;
  subcategory: ProductSubCategoryView;
  product: ProductView;

  constructor(private productsService: CatalogueService,
              private viewStateFactory: ViewStateFactoryService,
              private util: UtilService) {
    this.state = viewStateFactory.newInstance();
    this.submissionState = viewStateFactory.newInstance();
  }

  saveCatalogue() {
    function toImage(img: ImageView): string {
      return img == null ? null : img.path;
    }


    let result: ProductCategory[] = [];

    this.categories.forEach(c => {
      let c1: ProductCategory = {id: c.id, name: c.name, image: toImage(c.image), subcategories: []};
      result.push(c1);

      c.subcategories.forEach(cs => {
        let sc1: ProductSubCategory = {id: cs.id, name: cs.name, image: toImage(cs.image), products: []};
        c1.subcategories.push(sc1);

        cs.products.forEach(p => {
          let p1: Product = {id: p.id, name: p.name, description: p.description, price: p.price, priceLower: p.priceLower, images: []};
          sc1.products.push(p1);

          p.images.forEach(i => p1.images.push(i.path));
        });
      });
    });

    this.util.submit(this.productsService.saveCatalogue(result), this.submissionState);
  }

  onCategoryChange() {
    this.subcategory = null;
    this.product = null;
  }

  addCategory() {
    this.onCategoryChange();
    let id = ++this.sequence;
    this.category = {id: id, name: `Новая категория ${id}`, image: new ImageView(null), subcategories: []};
    this.categories.push(this.category);
  }

  deleteCategory(category: ProductCategoryView) {
    this.category = null;
    this.onCategoryChange();
    this.categories = this.categories.filter(c => c.id != category.id);
  }

  addSubCategory(category: ProductCategoryView) {
    this.onSubCategoryChange();
    let id = ++this.sequence;
    this.subcategory = {id: id, name: `Новая подкатегория ${id}`, image: new ImageView(null), products: []};
    category.subcategories.push(this.subcategory);
  }

  deleteSubCategory(category: ProductCategoryView, subCategory: ProductSubCategoryView) {
    this.subcategory = null;
    this.onCategoryChange();
    category.subcategories = category.subcategories.filter(sc => sc.id != subCategory.id);
  }

  addProduct(subCategory: ProductSubCategoryView) {
    let id = ++this.sequence;
    this.product = {id: id, name: `Новый продукт ${id}`, price: null, priceLower: null, description: null, images: []};
    subCategory.products.push(this.product);
  }

  deleteProduct(subCategory: ProductSubCategoryView, product: ProductView) {
    this.product = null;
    subCategory.products = subCategory.products.filter(p => p.id != product.id);
  }

  onSubCategoryChange() {
    this.product = null;
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
