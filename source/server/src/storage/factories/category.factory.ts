import { Injectable } from '@nestjs/common';
import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';

@Injectable()
export class CategoryFactory {
  buildDtoFromOrmEntity(categoryOrmEnity: CategoryOrmEntity): CategoryDto {
    return new CategoryDto(
      categoryOrmEnity.id,
      categoryOrmEnity.name,
      categoryOrmEnity.picture,
      categoryOrmEnity.title,
      categoryOrmEnity.description,
    );
  }
}
