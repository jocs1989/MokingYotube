<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# Crear un CRUD en NestJS

En este tutorial, aprenderás a crear un CRUD (Crear, Leer, Actualizar, Eliminar) básico en NestJS, utilizando un ejemplo de gestión de nombres.
# Video 1
### Paso 1.1: Configurar el entorno de desarrollo

Asegúrate de tener Node.js y npm instalados en tu sistema. Puedes verificar su instalación ejecutando los siguientes comandos en tu terminal:

```bash
node -v
npm -v
```
<!-- Nota: Omitir este paso si ya tienes instalado -->


### Paso 1.2: Instalar NestJS CLI
Instala la CLI de NestJS de forma global utilizando npm. La CLI nos ayudará a generar rápidamente los archivos y carpetas necesarios para nuestro proyecto NestJS:

```bash
npm i -g @nestjs/cli
 nest -v
```
**Nota:** Omitir este punto si ya tienes instalado NestJS.

### Paso 1.3: Crear un nuevo proyecto NestJS

Crea un nuevo proyecto NestJS utilizando la CLI. Ejecuta el siguiente comando y sigue las instrucciones:

```bash
nest new app-mocking
```

Esto creará una nueva carpeta llamada app-mocking con una estructura de proyecto básica.

### Paso 1.4: Generar un CRUD 

Dentro del directorio del proyecto, genera un CRUD

```bash
cd app-mocking
nest g res mocking
```

Selecciona la opción REST API ✔️
Generar la puntos de entrada CRUD? Y ✔️


### Paso 1.5: Abrir VSCODE 

En consola presiona el siguiente comendo en el directorio de trabajo.
```bash
code .
```
### Paso 1.6: generando clases 

Dentro del directorio del proyecto, crearemos la carpeta class crearemos  dos archivos 
```bash
nest g class mocking/class/category.class --no-spec --flat
nest g class mocking/class/images.class --no-spec --flat
nest g class mocking/class/products.class --no-spec --flat
```
Agregando contenido a los archivos 

### Imagenes
```typescript
export class ImagesClass {
  idImages: string;
  name: string;
  url: string;
}
```
### Categorias
```typescript
export class CategoryClass {
  idCategory: string;
  name: string;
}

```

### Productos
```typescript
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

```


### Paso 1.7: generando interfaces 

Dentro del directorio del proyecto, crearemos la carpeta class crearemos  dos archivos 
```bash
nest g interface mocking/interface/category.interface --no-spec --flat
nest g interface mocking/interface/images.interface  --no-spec --flat
nest g interface mocking/interface/products.interface  --no-spec --flat
```
Agregando contenido a los archivos 

### Imagenes
```typescript
export interface ImagesInterface {
  idImages: string;
  name: string;
  url: string;
}

```
### Categorias
```typescript
export interface CategoryInterface {
  idCategory: string;
  name: string;
}

```

### Productos
```typescript
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

```


### Paso 1.8: generando dto 

Dentro del directorio del proyecto, crearemos la carpeta class crearemos  dos archivos 
```bash
nest g class mocking/dto/id-mocking.dto --no-spec --flat
```

### Paso 1.9: instalando dependencias 

Instalando faker https://fakerjs.dev/guide/ en modo desarollo
```bash
npm install @faker-js/faker --save-dev
```
Instalando uuid :https://www.npmjs.com/package/uuid en modo desarollo
```bash
npm install uuid --save-dev
```

# Video 2
### Paso 2.1: Servicio mocking.service.ts 

Agregando en la clase mocking.service el patron de diseño singleton ver el sitio https://refactoring.guru/es/design-patterns/singleton/typescript/example

```typescript
export class MokingService {
// Patrón de diseño Singleton: instancia única de la clase
private static intance: MokingService;
constructor() {
    if (!MokingService.intance) {
      MokingService.intance = this;
          }
    return MokingService.intance;
  }
    //demas codigo
}
```

### Paso 2.2:  modificando Servicio mocking.service.ts 

Agregar idMokingDto de la clase IdMockingDto
```typescript
import { IsUUID } from 'class-validator'; // Importar el validador para PostgreSQL

export class IdMockingDto {
    @IsUUID(4) // Método que valida el formato de los IDs para PostgreSQL
    idMocking: string;
}

```
### Paso 2.3:  modificando Servicio mocking.service.ts 

Crear una Simulación de Base de Datos: 

```typescript

import { v4 as uuidv4 } from 'uuid';
//https://www.npmjs.com/package/uuid
import { faker } from '@faker-js/faker/locale/es_MX';
//https://github.com/faker-js/faker

export class MokingService {
  // Simulación de base de datos en memoria
  private products: ProductInterface[]; // Array para almacenar productos
  private images: ImagesInterface[];    // Array para almacenar imágenes
  private category: CategoryInterface[]; // Array para almacenar categorías

  // Crear una nueva instancia de imágenes con un UUID generado automáticamente
  newImages: ImagesInterface = {
    id: uuidv4(),
    name: '',
    url: '',
  };

  // Crear una nueva instancia de categoría con un UUID generado automáticamente
  newCategory: CategoryInterface = {
    id: uuidv4(),
    name: '',
  };

  // Patrón de diseño Singleton: instancia única de la clase

}
```


### Paso 2.5:  modificando Servicio mocking.service.ts 

Creando el Método generateProducts :


```typescript
export class MokingService {
  //  demás codigo

  // Este método se ejecuta al iniciar la aplicación para crear productos en memoria.
  onApplicationBootstrap() {
    this.generateProducts();
  }

  // Este método privado genera los productos de manera simulada.
  private generateProducts(): void {
    // Se establece el número de productos a generar.
    
    
  }

  //  demás codigo
}
```
### Paso 2.5:  modificando Servicio mocking.service.ts 

Desarrollando el Método generateProducts con


```typescript
export class MokingService {
 //  demás codigo
  private generateProducts(): void {
    // Se establece el número de productos a generar.
    let n = 15;
    // Se itera para crear cada producto.
    for (let i = 0; i < n; i++) {
      // Se asignan valores aleatorios a las propiedades de cada producto utilizando la librería faker.
      this.newImages.name = faker.commerce.productName();
      this.newImages.url = faker.image.url();
      this.newCategory.name = faker.commerce.department();
      // Se crea un objeto de tipo ProductInterface con datos simulados.
      const product: ProductInterface = {
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

  //  demás codigo

}
```