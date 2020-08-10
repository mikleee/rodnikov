import {Product, ProductCategory, ProductSubCategory} from "../catalogue/catalogue.model";


export class ProductCategoryView {
  id?: number;
  name: string;
  image?: ImageView;
  subcategories: ProductSubCategoryView[] = [];

  constructor(src: ProductCategory) {
    this.id = src.id;
    this.name = src.name;
    this.image = new ImageView(src.image);
    src.subcategories.forEach(sc => this.subcategories.push(new ProductSubCategoryView(sc)))
  }
}


export class ProductSubCategoryView {
  id?: number;
  name: string;
  image: ImageView;
  products: ProductView[] = [];

  constructor(src: ProductSubCategory) {
    this.id = src.id;
    this.name = src.name;
    this.image = new ImageView(src.image);
    src.products.forEach(p => this.products.push(new ProductView(p)))
  }
}

export class ProductView {
  id?: number;
  name: string;
  description?: string;
  price: number;
  priceLower?: number;
  images: ImageView[] = [];

  constructor(src: Product) {
    this.id = src.id;
    this.name = src.name;
    this.description = src.description;
    this.price = src.price;
    this.priceLower = src.priceLower;
    src.images.forEach(i => this.images.push(new ImageView(i)))
  }
}

export class ImageView {
  path: string;

  constructor(path: string) {
    this.path = path;
  }
}
