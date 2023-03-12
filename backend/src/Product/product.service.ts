import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async createProduct(name: string, description: string, image: string) {
    const newProduct = new this.productModel({
      name,
      description,
      image,
    });
    const result = await newProduct.save();
    return result
  }

  async getAllProducts(): Promise<Product[]> {
    return this.productModel.find().exec();
  }
}
