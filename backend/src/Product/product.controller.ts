import { Controller, Post, Body, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product } from './product.model';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Post()
  async addProducts(@Body() products: Product[]): Promise<Product[]> {
    const newProducts = await Promise.all(
      products.map(async (product) => {
        const { name, description, image } = product;
        return this.productService.createProduct(name, description, image);
      }),
    );
    return newProducts;
  }

  @Get()
  async getAllProducts(): Promise<Product[]> {
    const products = await this.productService.getAllProducts();
    return products;
  }
}
