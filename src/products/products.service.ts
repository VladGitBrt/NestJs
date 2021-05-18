import { Injectable } from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  private products = [];

  getAll() {
    return this.products;
  }
  getById(id: string) {
    return this.products.find((p) => p.id === id);
  }
  create(productDTO: CreateProductDTO) {
    this.products.push({
      ...productDTO,
      id: Date.now().toString(),
    });
  }
}
