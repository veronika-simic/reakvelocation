import { CategoryFactory } from '@shop-storage/factories/category.factory';
import { CategoryRepository } from '@shop-domain/repositories/category.repository';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
export declare class CategoryStorage implements CategoryRepository {
    private readonly categoryRepository;
    private readonly categoryFactory;
    constructor(categoryRepository: Repository<CategoryOrmEntity>, categoryFactory: CategoryFactory);
    getAllCategories(): Promise<CategoryDto[]>;
    getCategoryById(id: number): Promise<CategoryDto[]>;
}
