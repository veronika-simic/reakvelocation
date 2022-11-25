import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
export declare class CategoryFactory {
    buildDtoFromOrmEntity(categoryOrmEnity: CategoryOrmEntity): CategoryDto;
}
