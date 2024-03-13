import { CategoryClass } from './category.class';
import { ImagesClass } from './images.class';

export class ProductsClass {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: ImagesClass[];
  review: string;
  available: boolean;
  category: CategoryClass[];
}
