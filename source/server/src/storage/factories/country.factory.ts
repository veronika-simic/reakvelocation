import { Injectable } from '@nestjs/common';
import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';


@Injectable()
export class CountryFactory {
  buildDtoFromOrmEntity(countryOrmEnity: CountryOrmEntity): CountryDto {
    return new CountryDto(
      countryOrmEnity.id,
      countryOrmEnity.name,
      countryOrmEnity.description,
      countryOrmEnity.picture
    );
  }
}
