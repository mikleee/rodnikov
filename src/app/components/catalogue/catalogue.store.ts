import {ProductCategory} from "./catalogue.model";


export const catalogueStore: ProductCategory[] = [];

let seq = 0;
while (catalogueStore.length < 10) {
  let category = {
    id: seq++,
    name: `Категория №${catalogueStore.length + 1}`,
    images: [],
    products: []
  };

  while (category.products.length < 10) {
    let product = {
      id: seq++,
      name: `Продукт №${catalogueStore.length + 1}${category.products.length + 1}`,
      price: Math.random() * 300,
      images: [`assets/mock-images/${Math.floor(Math.random() * 7) + 1}.jpg`]
    };
    category.products.push(product);
  }
  catalogueStore.push(category)
}
