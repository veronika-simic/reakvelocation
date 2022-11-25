import { CategoryDto } from "@shop-domain/entities/dto/category.dto";

export interface CategoryRepository {
  getAllCategories(): Promise<CategoryDto[]>;
  getCategoryById(id: number): Promise<CategoryDto[]>;
}

export const CategoryRepositorySymbol = Symbol('CategoryRepository');
