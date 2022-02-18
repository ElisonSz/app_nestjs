import { Controller, Get } from '@nestjs/common';

@Controller('categories')
export class CategoriesController {
  @Get('/saludo')
  getHello(): string {
    return 'Hello categories';
  }
}
