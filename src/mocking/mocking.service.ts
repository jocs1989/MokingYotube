import { v4 as uuidv4 } from 'uuid';

//https://www.npmjs.com/package/uuid
import { faker } from '@faker-js/faker/locale/es_MX';
import { Injectable } from '@nestjs/common';

import { CreateMockingDto } from './dto/create-mocking.dto';
import { UpdateMockingDto } from './dto/update-mocking.dto';
import { CategoryInterface } from './interface/category.interface.interface';
import { ImagesInterface } from './interface/images.interface.interface';
import { ProductsInterface } from './interface/products.interface.interface';

//https://github.com/faker-js/faker
@Injectable()
export class MockingService {
  // Simulación de base de datos en memoria
  private products: ProductsInterface[]; // Array para almacenar productos
  private images: ImagesInterface[]; // Array para almacenar imágenes
  private category: CategoryInterface[]; // Array para almacenar categorías

  // Crear una nueva instancia de imágenes con un UUID generado automáticamente
  newImages: ImagesInterface = {
    idImages: uuidv4(),
    name: '',
    url: '',
  };

  // Crear una nueva instancia de categoría con un UUID generado automáticamente
  newCategory: CategoryInterface = {
    idCategory: uuidv4(),
    name: '',
  };

  // Patrón de diseño Singleton: instancia única de la clase

  private static instance: MockingService;
  constructor() {
    if (!MockingService.instance) {
      MockingService.instance = this;
      //Inicial la base virtuales
      this.products = []; //productos
      this.images = []; // images
      this.category = []; // categorias
    }
    return MockingService.instance;
  }
  // Este método se ejecuta al iniciar la aplicación para crear productos en memoria.
  onApplicationBootstrap() {
    this.generateProducts();
  }

  // Este método privado genera los productos de manera simulada.
  private generateProducts(): void {
    // Se establece el número de productos a generar.
    const n = 15;
    // Se itera para crear cada producto.
    for (let i = 0; i < n; i++) {
      // Se asignan valores aleatorios a las propiedades de cada producto utilizando la librería faker.
      this.newImages.name = faker.commerce.productName();
      this.newImages.url = faker.image.url();
      this.newCategory.name = faker.commerce.department();
      // Se crea un objeto de tipo ProductInterface con datos simulados.
      const product: ProductsInterface = {
        id: uuidv4(),
        name: faker.commerce.productName(),
        description: faker.lorem.sentence(),
        price: parseFloat(faker.commerce.price()),
        stock: parseFloat(faker.commerce.price({ min: 1, max: 1000 })),
        brand: faker.commerce.department(),
        images: [this.newImages],
        category: [this.newCategory],
        available: true,
        review: faker.lorem.sentence(),
      };
      // Se agrega el producto creado a la lista de productos.
      this.products.push(product);
      // Se añaden las imágenes y categorías generadas a las respectivas listas.
      this.images.push(this.newImages);
      this.category.push(this.newCategory);
    }
  }
  //CRUD
  create(createMockingDto: CreateMockingDto) {
    return 'This action adds a new mocking';
  }

  findAll() {
    return `This action returns all mocking`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mocking`;
  }

  update(id: number, updateMockingDto: UpdateMockingDto) {
    return `This action updates a #${id} mocking`;
  }

  remove(id: number) {
    return `This action removes a #${id} mocking`;
  }
}
