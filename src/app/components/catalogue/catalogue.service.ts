import {Injectable} from "@angular/core";
import {CatalogueStore, Product, ProductCategory, ProductSubCategory} from "./catalogue.model";
import {DropboxService} from "../../service/dropbox.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {

  constructor(private dbx: DropboxService) {
  }

  private static productMatch(searchValue: string, candidate: Product): boolean {
    let match = false;

    if (searchValue) {
      searchValue = searchValue.toLowerCase();

      if (String(candidate.id) == searchValue) {
        match = true;
      }

      let toCompare = [];
      toCompare.push(candidate.name);
      toCompare.push(candidate.subcategory.name);
      toCompare.push(candidate.subcategory.category.name);

      if (!match) {
        for (let v of toCompare) {
          if (v && String(v).toLowerCase().startsWith(searchValue)) {
            match = true;
            break;
          }
        }
      }

      if (!match && searchValue.length >= 3) {
        for (let v of toCompare) {
          if (v && String(v).toLowerCase().includes(searchValue)) {
            match = true;
            break;
          }
        }
      }

    }
    return match
  }

  saveCatalogue(data: ProductCategory[]): Observable<Object> {
    return this.dbx.saveCatalogue(data);
  }

  getCategories(): Observable<ProductCategory[]> {
    return this.observable(this.getCatalogue(), (catalogueStore: CatalogueStore) => {
      return Array.from(catalogueStore.categories.values());
    })
  }

  getCategory(id): Observable<ProductCategory> {
    return this.observable(this.getCatalogue(), (catalogueStore: CatalogueStore) => {
      return catalogueStore.categories.get(id);
    });
  }

  getSubCategory(id): Observable<ProductSubCategory> {
    return this.observable(this.getCatalogue(), (catalogueStore: CatalogueStore) => {
      return catalogueStore.subCategories.get(id);
    });
  }

  getProduct(id): Observable<Product> {
    return this.observable(this.getCatalogue(), (catalogueStore: CatalogueStore) => {
      return catalogueStore.products.get(id);
    });
  }

  private getCatalogue() {
    return this.dbx.getCatalogue();
  }

  findProductByCriteria(searchValue: string): Observable<Product[]> {
    return this.observable(this.getCatalogue(), (catalogueStore: CatalogueStore) => {
      let products: Product[] = [];
      catalogueStore.products.forEach((product) => {
        if (CatalogueService.productMatch(searchValue, product)) {
          products.push(product);
        }
      })
      return products;
    });
  }

  observable<T>(initial: Observable<CatalogueStore>, transformer: (catalogueStore: CatalogueStore) => T): Observable<T> {
    return new Observable<T>((observer) => {
      initial.subscribe(
        (result: CatalogueStore) => {
          let result1: T = transformer(result);
          observer.next(result1);
        },
        (error) => observer.error(error));
    });
  }

}
