import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CategoryRepository } from '@shop-domain/repositories/category.repository';
export declare class CategoryService {
    private readonly categoryRepository;
    constructor(categoryRepository: CategoryRepository);
    getAllCategories(): Promise<CategoryDto[]>;
    getCategoryById(id: number): Promise<CategoryDto[]>;
}
