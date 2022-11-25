import { Inject, Injectable } from '@nestjs/common';
import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CategoryRepository, CategoryRepositorySymbol } from '@shop-domain/repositories/category.repository';
import { CountryRepository, CountryRepositorySymbol } from '@shop-domain/repositories/country.repository';

@Injectable()
export class CategoryService {
  constructor(@Inject(CategoryRepositorySymbol) private readonly categoryRepository: CategoryRepository) {}

  getAllCategories(): Promise<CategoryDto[]> {
    return this.categoryRepository.getAllCategories();
  }
  async getCategoryById(id: number): Promise<CategoryDto[]> {
    return await this.categoryRepository.getCategoryById(id);
  }
}
