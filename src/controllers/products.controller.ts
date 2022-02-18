import { Controller, Get, Param, Query } from '@nestjs/common';

@Controller('products')
export class ProductsController {
  @Get('/all')
  getProducts(
    @Query('limit') limit: number,
    @Query('offset') offset: number,
  ): string {
    return `simon el vergo limit => ${limit} and offset => ${offset}`;
  }
  @Get('/:id/:almacen')
  getProduct(
    @Param('id') id: string,
    @Param('almacen') almacen: string,
  ): string {
    return `products ${id} AND location_code ${almacen}`;
  }
}
