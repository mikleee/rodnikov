export interface Product {
  id?: number;
  subcategory: ProductSubCategory
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
  category: ProductCategory;
  products: Product[];
}

