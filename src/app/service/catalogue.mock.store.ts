import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {CatalogueStore, ProductCategory} from "../components/catalogue/catalogue.model";

@Injectable({
  providedIn: 'root'
})
export class CatalogueMockStore {
  private catalogue: CatalogueStore;
  private needsLoad: boolean = true;

  constructor() {
    function imageUrl() {
      return `assets/mock-images/${Math.floor(Math.random() * 14) + 1}.jpg`
    }

    let seq = 0;
    let config = [
      {category: 'Двери', subcategories: ['Входные двери', 'Межкомнатные двери']},
      {category: 'Напольные покрытия', subcategories: ['Плитка', 'Ламинат', 'Паркет', 'Солома']},
      {category: 'Гомна на окна', subcategories: ['Роллеты', 'Жалюзи', 'Шторы', 'Гардины']},
      {category: 'Настенные покрытия', subcategories: ['Обои', 'Краска', 'Кирпич']}
    ];

    let result: ProductCategory[] = [];
    config.forEach((c) => {
      let category = {id: seq++, name: c.category, image: imageUrl(), subcategories: []};
      result.push(category);

      c.subcategories.forEach((sc) => {
        let sub = {id: seq++, name: sc, category: category, image: imageUrl(), products: []};
        category.subcategories.push(sub);

        let productsCount = Math.ceil(Math.random() * 30) + 1;
        while (sub.products.length < productsCount) {
          let product = {id: seq++, subcategory: sub, name: `Продукт ${Math.round(Math.random() * 100000)}`, price: Math.random() * 300, images: [imageUrl(), imageUrl(), imageUrl()]};
          sub.products.push(product);
        }
      });
      this.catalogue = new CatalogueStore(result);
    });
  }

  getCatalogue(): Observable<CatalogueStore> {
    return new Observable<CatalogueStore>((observer) => {
      if (this.needsLoad) {
        setTimeout(() => {
          this.needsLoad = false;
          observer.next(this.catalogue);
        }, 300);
      } else {
        observer.next(this.catalogue);
      }
    });
  }

  saveCatalogue(data: ProductCategory[]): Observable<Object> {
    return new Observable<CatalogueStore>((observer) => {
      setTimeout(() => {
        this.catalogue = new CatalogueStore(data);
        this.needsLoad = true;
        observer.next(this.catalogue);
      }, 1500);
    });
  }

}
