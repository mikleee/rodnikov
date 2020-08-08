import {Injectable} from "@angular/core";
import {catalogueStore} from "./catalogue.store";
import {Product, ProductCategory, ProductSubCategory} from "./catalogue.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private categories: Map<number, ProductCategory> = new Map<number, ProductCategory>();
  private subCategories: Map<number, ProductSubCategory> = new Map<number, ProductSubCategory>();
  private products: Map<number, Product> = new Map<number, Product>();


  constructor() {
    catalogueStore.forEach((category) => {
      this.categories.set(category.id, category);

      category.subcategories.forEach((subCategory) => {
        this.subCategories.set(subCategory.id, subCategory);

        subCategory.products.forEach((product) => {
          this.products.set(product.id, product);
        });
      });
    })
  }

  getCategories(): ProductCategory[] {
    return catalogueStore
  }

  getCategory(id): ProductCategory {
    return this.categories.get(id);
  }

  getSubCategory(id): ProductSubCategory {
    return this.subCategories.get(id);
  }

  getProduct(id): Product {
    return this.products.get(id);
  }

  findProductByCriteria(searchValue: string): Product[] {
    let products: Product[] = [];
    if (searchValue) {
      searchValue = searchValue.toLowerCase();

      this.products.forEach((candidate: Product) => {
        let match = false;

        if (String(candidate.id) == searchValue) {
          match = true;
        }

        let toCompare = [];
        toCompare.push(candidate.name);
        toCompare.push(candidate.subcategory.name);
        toCompare.push(candidate.subcategory.category.name);

        if (!match) {
          for (let v of toCompare) {
            if (v && String(v).startsWith(searchValue)) {
              match = true;
              break;
            }
          }
        }

        if (!match && searchValue.length >= 3) {
          for (let v of toCompare) {
            if (v && String(v).includes(searchValue)) {
              match = true;
              break;
            }
          }
        }

        if (match) {
          products.push(candidate);
        }
      });
    }
    return products;
  }

}
