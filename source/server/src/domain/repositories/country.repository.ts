import { CountryDto } from "@shop-domain/entities/dto/country.dto";

export interface CountryRepository {
  getAllCountries(): Promise<CountryDto[]>;
}

export const CountryRepositorySymbol = Symbol('CountryRepository');
