import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';
export declare class CountryFactory {
    buildDtoFromOrmEntity(countryOrmEnity: CountryOrmEntity): CountryDto;
}
