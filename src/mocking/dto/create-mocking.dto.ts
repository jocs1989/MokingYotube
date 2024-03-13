import { CategoryDto } from './category.dto';
import { ImagesDto } from './images.dto';

export class CreateMockingDto {
  name: string;
  description: string;
  price: number;
  stock: number;
  brand: string;
  category: CategoryDto[];
  review: string;
  available: boolean;
  images: ImagesDto[];
}
