import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryFactory } from '@shop-storage/factories/category.factory';
import { CategoryRepository } from '@shop-domain/repositories/category.repository';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
import { Repository } from 'typeorm';
import { CategoryDto } from '@shop-domain/entities/dto/category.dto';

@Injectable()
export class CategoryStorage implements CategoryRepository {
  constructor(
    @InjectRepository(CategoryOrmEntity)
    private readonly categoryRepository: Repository<CategoryOrmEntity>,
    private readonly categoryFactory: CategoryFactory,
  ) {}

  async getAllCategories(): Promise<CategoryDto[]> {
    const categoryOrmEntities = await this.categoryRepository.find();
    return categoryOrmEntities.map(entity => this.categoryFactory.buildDtoFromOrmEntity(entity));
  }

  async getCategoryById(id: number): Promise<CategoryDto[]> {
    const categoryOrmEntity = await this.categoryRepository.find({id: id});
    return await Promise.all(categoryOrmEntity.map(cat => this.categoryFactory.buildDtoFromOrmEntity(cat)));
  }

}
