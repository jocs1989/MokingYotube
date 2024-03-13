import { CategoryInterface } from './category.interface.interface';
import { ImagesInterface } from './images.interface.interface';

export interface ProductsInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: ImagesInterface[];
  review: string;
  available: boolean;
  category: CategoryInterface[];
}
