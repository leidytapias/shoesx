export interface Product {
  id: string;
  description: string;
  images: string[];
  inStock: number;
  price: number;
  sizes: Size[];
  colors?: Color[];
  slug: string;
  tags: string[];
  title: string;
  //todo: type: Type;
  gender: Category;
}

export interface CartProduct {
  id: string;
  slug: string;
  title: string;
  price: number;
  quantity: number;
  size: Size;
  color?: Color;
  image: string;
}


export interface ProductImage {
  id: number;
  url: string;
  productId: string;
}


type Category = 'men'|'women'|'unisex';
export type Size = 't35' | 't36' | 't37' | 't38' | 't39' | 't40' | 't41' | 't42' | 't43';
export type Color = 'black' | 'white' | 'red' | 'green' | 'blue' | 'yellow' | 'orange' | 'purple' | 'pink' | 'brown' | 'gray' | 'silver' | 'gold';
export type Type = 'soccer' | 'tennis' | 'casual' | 'sandals' | 'run';