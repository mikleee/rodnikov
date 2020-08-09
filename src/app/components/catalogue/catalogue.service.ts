import {Injectable} from "@angular/core";
import {Product, ProductCategory, ProductSubCategory} from "./catalogue.model";
import {DropboxService} from "../../service/dropbox.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CatalogueService {
  private readonly catalogueStore: Promise<CatalogueStore>;

  constructor(dbx: DropboxService) {
    this.catalogueStore = new Observable<CatalogueStore>((observer) => {
      dbx.getCatalogue()
        .subscribe(result => {
          observer.next(new CatalogueStore(result as ProductCategory[]));
          observer.complete();
        }, error => {
          observer.error(error);
        });
    }).toPromise();
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

  getCategories(): Observable<ProductCategory[]> {
    return this.observable(this.catalogueStore, (catalogueStore: CatalogueStore) => {
      return Array.from(catalogueStore.categories.values());
    })
  }

  getCategory(id): Observable<ProductCategory> {
    return this.observable(this.catalogueStore, (catalogueStore: CatalogueStore) => {
      return catalogueStore.categories.get(id);
    });
  }

  getSubCategory(id): Observable<ProductSubCategory> {
    return this.observable(this.catalogueStore, (catalogueStore: CatalogueStore) => {
      return catalogueStore.subCategories.get(id);
    });
  }

  getProduct(id): Observable<Product> {
    return this.observable(this.catalogueStore, (catalogueStore: CatalogueStore) => {
      return catalogueStore.products.get(id);
    });
  }

  findProductByCriteria(searchValue: string): Observable<Product[]> {
    return this.observable(this.catalogueStore, (catalogueStore: CatalogueStore) => {
      let products: Product[] = [];
      catalogueStore.products.forEach((product) => {
        if (CatalogueService.productMatch(searchValue, product)) {
          products.push(product);
        }
      })
      return products;
    });
  }

  observable<T>(initial: Promise<CatalogueStore>, transformer: (catalogueStore: CatalogueStore) => T): Observable<T> {
    return new Observable<T>((observer) => {
      initial.then(
        (result: CatalogueStore) => {
          let result1: T = transformer(result);
          observer.next(result1);
        },
        (error) => observer.error(error));
    });
  }

}

class CatalogueStore {
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
