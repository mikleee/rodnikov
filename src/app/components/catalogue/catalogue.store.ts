import {Product, ProductCategory, ProductSubCategory} from "./catalogue.model";


export const catalogueStore: ProductCategory[] = [];

function imageUrl() {
  return `assets/mock-images/${Math.floor(Math.random() * 14) + 1}.jpg`
}

let config = [
  {category: 'Двери', subcategories: ['Входные двери', 'Межкомнатные двери']},
  {category: 'Напольные покрытия', subcategories: ['Плитка', 'Ламинат', 'Паркет', 'Солома']},
  {category: 'Гомна на окна', subcategories: ['Роллеты', 'Жалюзи', 'Шторы', 'Гардины']},
  {category: 'Настенные покрытия', subcategories: ['Обои', 'Краска', 'Кирпич']}
];


let seq = 0;

config.forEach((c) => {
  let category = createProductCategory(c.category);
  catalogueStore.push(category);

  c.subcategories.forEach((sc) => {
    let sub = createProductSubCategory(sc, category);
    category.subcategories.push(sub);

    while (sub.products.length < 10) {
      let product = createProduct(`${sc} №${sub.products.length+1}`, sub);
      sub.products.push(product);
    }
  });

});
debugger;

/*while (catalogueStore.length < 10) {
  let category = createProductCategory(`Категория №${catalogueStore.length + 1}`);
  catalogueStore.push(category);


  while (category.subcategories.length < 10) {
    let sub = createProductSubCategory(`Подкатегория №${catalogueStore.length + 1}${category.subcategories.length + 1}`, category);
    category.subcategories.push(sub);


    while (sub.products.length < 10) {
      let product = createProduct(`Продукт №${catalogueStore.length + 1}${category.subcategories.length + 1}${sub.products.length + 1}`, sub);
      sub.products.push(product);
    }
  }
  catalogueStore.push(category)
}*/


function createProductCategory(name: string): ProductCategory {
  return {
    id: seq++,
    name: name,
    image: imageUrl(),
    subcategories: []
  };
}

function createProductSubCategory(name: string, category: ProductCategory): ProductSubCategory {
  return {
    id: seq++,
    name: name,
    category: category,
    image: imageUrl(),
    products: []
  };
}

function createProduct(name: string, subcategory: ProductSubCategory): Product {
  return {
    id: seq++,
    subcategory: subcategory,
    name: name,
    price: Math.random() * 300,
    images: [imageUrl(), imageUrl(), imageUrl()]
  };
}
