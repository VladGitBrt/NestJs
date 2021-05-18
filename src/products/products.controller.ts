import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDTO } from './dto/create-product.dto';
import { UpdateProductDTO } from './dto/update-product.dto';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  @Get()
  getAll() {
    return this.productService.getAll;
  }
  @Get(':id')
  getByID(@Param('id') id): string {
    return this.productService.getById(id);
  }
  @Post()
  create(@Body() createProduct: CreateProductDTO) {
    return this.productService.create(CreateProductDTO);
  }
  @Delete(':id')
  removeById(@Param('id') id: string) {
    return `Item with id ${id} has been removed`;
  }
  @Put(':id')
  update(@Body() updateProductDTO: UpdateProductDTO, @Param('id') id: string) {
    return `Updated id(${id})`;
  }
}
