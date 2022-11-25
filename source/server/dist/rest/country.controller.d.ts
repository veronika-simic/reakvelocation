import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryService } from '@shop-domain/services/country.service';
export declare class CountryController {
    private readonly countryService;
    constructor(countryService: CountryService);
    getAllCountries(): Promise<CountryDto[]>;
    getCountryById(id: string): Promise<CountryDto[]>;
}
