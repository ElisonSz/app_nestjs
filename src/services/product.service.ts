import { Injectable, NotFoundException } from '@nestjs/common';

@Injectable()
export class ProductService {
  private counterId = 1;
  private products: any = [
    { id: 1, descripcion: 'pepsi lite', price: 12, stock: 123, location: 70 },
  ];
  findAll() {
    return this.products;
  }
  findOne(id: number) {
    const product = this.products.filter((p: any) => p.id === id);
    if (!product) {
      throw new NotFoundException(`Product #${id} not found`);
    }
    return product;
  }
  created(payload: any) {
    this.counterId = this.counterId++;
    const newProduct = {
      id: this.counterId,
      ...payload,
    };
    return newProduct;
  }
}
