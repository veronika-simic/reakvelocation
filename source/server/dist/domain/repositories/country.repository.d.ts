import { CountryDto } from "@shop-domain/entities/dto/country.dto";
export interface CountryRepository {
    getAllCountries(): Promise<CountryDto[]>;
    getCountryById(id: number): Promise<CountryDto[]>;
}
export declare const CountryRepositorySymbol: unique symbol;
