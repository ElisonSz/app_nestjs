import {
  IsString,
  IsNumber,
  IsEmail,
  IsDate,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsNotEmpty()
  @IsString()
  readonly descripcion: string;
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  readonly stock: number;
}
export class UpdateProductDto extends PartialType(CreateProductDto) {}
