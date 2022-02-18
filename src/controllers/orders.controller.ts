import { Controller, Get, Param, Post, Body } from '@nestjs/common';

@Controller('orders')
export class OrdersController {
  orders = [
    {
      id: 1,
      concepto: 'compra post',
      tipo: 1,
      codigo: '18785451',
      items: [{ no: 1001, nombre: 'tenis adidas', cantidad: 1 }],
    },
    {
      id: 2,
      concepto: 'compra post',
      tipo: 1,
      codigo: '18785452',
      items: [{ no: 1002, nombre: 'canisa puma talla M', cantidad: 1 }],
    },
    {
      id: 3,
      concepto: 'compra post',
      tipo: 1,
      codigo: '18785453',
      items: [{ no: 1003, nombre: 'calsoneta nike talla M', cantidad: 1 }],
    },
  ];
  @Get('/all')
  getOrdens(): any {
    return this.orders;
  }

  @Get('/:id')
  getOrderById(@Param('id') id: number): any {
    const oneOrder = this.orders.filter((order) => order.id == id);
    return oneOrder;
  }

  @Post()
  create(@Body() payload: any) {
    const { numero_orden, items } = payload;
    return {
      numero_orden,
      items,
    };
  }
}
