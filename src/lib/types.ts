export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface GroceryProduct extends Product {
  discount: number;
  originalPrice?: number;
  unit: string;
}

export interface GroceryCategory {
  id: string;
  name: string;
  description: string;
  products: GroceryProduct[];
}