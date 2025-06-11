import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductController {
  @Get()
  findAll() {
    return ['Product 1', 'Product 2', 'Product 3'];
  }
}