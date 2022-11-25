import { Module } from '@nestjs/common';

import { DomainModule } from '@shop-domain/domain.module';
import { CountryController } from '@shop-rest/country.controller';
import { CategoryController } from './category.controller';

@Module({
  imports: [DomainModule],
  controllers: [CategoryController, CountryController],
})
export class RestModule {}
