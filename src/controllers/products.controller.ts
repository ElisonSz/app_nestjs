import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  //ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from '../services/product.service';
import { ParseIntPipe } from '../common/parse-int.pipe';
import { CreateProductDto } from '../dtos/products.dtos';
@Controller('products')
export class ProductsController {
  constructor(private productService: ProductService) {}
  @Get('/all')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ): string {
    //return `simon el vergo limit => ${limit} and offset => ${offset}`;
    return this.productService.findAll();
  }
  @Get('/:id')
  getProduct(@Res() res: Response, @Param('id', ParseIntPipe) id: number): any {
    const oneProduct = this.productService.findOne(id);
    if (oneProduct.length > 0) {
      res.status(HttpStatus.OK).json(oneProduct);
    } else {
      res.status(HttpStatus.NOT_FOUND).json(oneProduct);
    }
    //return `products ${id} AND location_code ${almacen}`;
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    const { name, descripcion, price, stock } = payload;
    return {
      message: `${name} AND ${name} AND ${descripcion} AND ${price} AND ${stock}`,
    };
  }
}
