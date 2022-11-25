import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CountryStorage } from '@shop-storage/storages/country.storage';
import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';
import { CountryFactory } from '@shop-storage/factories/country.factory';
import { CountryRepositorySymbol } from '@shop-domain/repositories/country.repository';
import { CategoryFactory } from './factories/category.factory';
import { CategoryRepositorySymbol } from '@shop-domain/repositories/category.repository';
import { CategoryStorage } from './storages/category.storage';
import { CategoryOrmEntity } from './orm/category.orm.entity';

@Module({
  providers: [
    CountryFactory,
    {
      provide: CountryRepositorySymbol,
      useClass: CountryStorage,
    },
    CategoryFactory,
    {
      provide: CategoryRepositorySymbol,
      useClass: CategoryStorage,
    },
  ],
  exports: [CountryRepositorySymbol, CategoryRepositorySymbol],
  imports: [TypeOrmModule.forFeature([CountryOrmEntity]), TypeOrmModule.forFeature([CategoryOrmEntity])],
})
export class StorageModule {}
