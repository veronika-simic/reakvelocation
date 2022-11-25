import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryRepository } from '@shop-domain/repositories/country.repository';
import { CountryFactory } from '@shop-storage/factories/country.factory';
import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';
import { Repository } from 'typeorm';
export declare class CountryStorage implements CountryRepository {
    private readonly countryRepository;
    private readonly countryFactory;
    constructor(countryRepository: Repository<CountryOrmEntity>, countryFactory: CountryFactory);
    getAllCountries(): Promise<CountryDto[]>;
    getCountryById(id: number): Promise<CountryDto[]>;
}
