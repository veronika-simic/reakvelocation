import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CategoryService } from '@shop-domain/services/category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<CategoryDto[]>;
    getCategoryById(id: string): Promise<CategoryDto[]>;
}
