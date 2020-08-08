import {ProductCategory} from "./catalogue.model";


export const catalogueStore: ProductCategory[] = [];

function imageUrl() {
  return `assets/mock-images/${Math.floor(Math.random() * 14) + 1}.jpg`
}

let seq = 0;
while (catalogueStore.length < 10) {
  let category = {
    id: seq++,
    name: `Категория №${catalogueStore.length + 1}`,
    image: imageUrl(),
    subcategories: []
  };

  while (category.subcategories.length < 10) {
    let sub = {
      id: seq++,
      name: `Подкатегория №${catalogueStore.length + 1}${category.subcategories.length + 1}`,
      category: category,
      image: imageUrl(),
      products: []
    };
    category.subcategories.push(sub);


    while (sub.products.length < 10) {
      let product = {
        id: seq++,
        subcategory: sub,
        name: `Продукт №${catalogueStore.length + 1}${category.subcategories.length + 1}${sub.products.length + 1}`,
        price: Math.random() * 300,
        images: [imageUrl(), imageUrl(), imageUrl()]
      };
      sub.products.push(product);
    }
  }
  catalogueStore.push(category)
}
