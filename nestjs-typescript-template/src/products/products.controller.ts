import {
  Body,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor, Post,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import CreateProductDto from './dto/createProduct.dto';
import ProductsService from './products.service';

@Controller('products')
@UseInterceptors(ClassSerializerInterceptor)
export default class ProductsController {
  constructor(
    private readonly productsService: ProductsService
  ) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProducts();
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createProduct(@Body() product: CreateProductDto) {
    return this.productsService.createProduct(product);
  }
}
