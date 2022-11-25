import { Injectable } from '@nestjs/common';
import { EntityManager } from 'typeorm';

import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';
import { initialCountries } from '@shop-storage/seeding/country.seeds';
import { CategoryOrmEntity } from '@shop-storage/orm/category.orm.entity';
import { initialCategories } from './category.seeds';

@Injectable()
export class SeedingService {
  constructor(private readonly entityManager: EntityManager) {}

  async seed(): Promise<void> {
    await Promise.all([this.entityManager.save(CountryOrmEntity, [...initialCountries])]);
    await Promise.all([this.entityManager.save(CategoryOrmEntity, [...initialCategories])]);
  }
}
