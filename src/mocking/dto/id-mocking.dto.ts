import { IsUUID } from 'class-validator'; // Importar el validador para PostgreSQL

export class IdMockingDto {
  @IsUUID(4) // Método que valida el formato de los IDs para PostgreSQL
  idMocking: string;
}
