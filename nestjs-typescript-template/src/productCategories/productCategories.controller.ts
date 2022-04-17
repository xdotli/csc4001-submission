import {
  Body,
  Controller,
  Get,
  UseGuards,
  UseInterceptors,
  ClassSerializerInterceptor, Post,
} from '@nestjs/common';
import JwtAuthenticationGuard from '../authentication/jwt-authentication.guard';
import ProductCategoriesService from './productCategories.service';
import CreateProductCategoryDto from './dto/createProductCategory.dto';

@Controller('product-categories')
@UseInterceptors(ClassSerializerInterceptor)
export default class ProductCategoriesController {
  constructor(
    private readonly productsService: ProductCategoriesService
  ) {}

  @Get()
  getAllProducts() {
    return this.productsService.getAllProductCategories();
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  async createProduct(@Body() productCategory: CreateProductCategoryDto) {
    return this.productsService.createProductCategory(productCategory);
  }
}
