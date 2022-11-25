import { Module } from '@nestjs/common';

import { CountryService } from '@shop-domain/services/country.service';
import { CountryFactory } from '@shop-domain/factories/country.factory';
import { StorageModule } from '@shop-storage/storage.module';
import { CategoryService } from './services/category.service';
import { CategoryFactory } from './factories/category.factory';

@Module({
  providers: [CountryService, CountryFactory, CategoryService, CategoryFactory],
  exports: [CountryService, CategoryService],
  imports: [StorageModule],
})
export class DomainModule {}
