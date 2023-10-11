import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private productos = [
    {
      id: 1,
      nombre: 'Producto 1',
    },
    {
      id: 2,
      nombre: 'Producto 2',
    },
    {
      id: 3,
      nombre: 'Producto 3',
    },
  ];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): any {
    return this.productos;
  }

  @Get(':id')
  getHello1(@Param('id') id: number): any {
    return this.productos.find((item) => item.id === +id);
  }

  @Post('/prod')
  sendData(@Body() data): any {
    this.productos.push(data);
    return this.productos;
  }
}
