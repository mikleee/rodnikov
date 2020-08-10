export interface Product {
  id?: number;
  subcategory?: ProductSubCategory
  name: string;
  description?: string;
  price: number;
  priceLower?: number;
  images: string[];
}

export interface ProductCategory {
  id?: number;
  name: string;
  image?: string;
  subcategories: ProductSubCategory[];
}

export interface ProductSubCategory {
  id?: number;
  name: string;
  image: string;
  category?: ProductCategory;
  products: Product[];
}

export class CatalogueStore {
  categories: Map<number, ProductCategory> = new Map<number, ProductCategory>();
  subCategories: Map<number, ProductSubCategory> = new Map<number, ProductSubCategory>();
  products: Map<number, Product> = new Map<number, Product>();
  private sequence: number = 0;

  constructor(source: ProductCategory[]) {
    // normalise
    source.forEach((category) => {
      category.id = category.id || this.sequence++;

      category.subcategories.forEach((subcategory) => {
        subcategory.id = subcategory.id || this.sequence++;
        subcategory.category = category;

        subcategory.products.forEach((product) => {
          product.id = product.id || this.sequence++;
          product.subcategory = subcategory;
        });
      });

    });

    // assign
    source.forEach((category) => {
      this.categories.set(category.id, category);

      category.subcategories.forEach((subCategory) => {
        this.subCategories.set(subCategory.id, subCategory);

        subCategory.products.forEach((product) => {
          this.products.set(product.id, product);
        });

      });
    })
  }
}


