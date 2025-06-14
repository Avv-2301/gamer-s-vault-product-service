import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products') //prefix all routes with /products
export class ProductController {
  constructor(private readonly productService: ProductService){}

  @Get()
  getAllProducts() {
    return this.productService.getAllProducts();
  }
}