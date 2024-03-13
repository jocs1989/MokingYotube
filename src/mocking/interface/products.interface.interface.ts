import { ImagesDto } from '../dto/images.dto';
import { CategoryInterface } from './category.interface.interface';

export interface ProductsInterface {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  images: ImagesDto[];
  review: string;
  available: boolean;
  category: CategoryInterface[];
}
