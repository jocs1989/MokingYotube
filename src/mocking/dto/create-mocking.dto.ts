import { CategoryInterface } from '../interface/category.interface.interface';
import { ImagesInterface } from '../interface/images.interface.interface';

export class CreateMockingDto {
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
