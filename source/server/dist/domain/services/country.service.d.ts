import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryRepository } from '@shop-domain/repositories/country.repository';
export declare class CountryService {
    private readonly countryRepository;
    constructor(countryRepository: CountryRepository);
    getAllCountries(): Promise<CountryDto[]>;
    getCountryById(id: number): Promise<CountryDto[]>;
}
