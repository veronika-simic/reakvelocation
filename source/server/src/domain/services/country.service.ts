import { Inject, Injectable } from '@nestjs/common';
import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryRepository, CountryRepositorySymbol } from '@shop-domain/repositories/country.repository';

@Injectable()
export class CountryService {
  constructor(@Inject(CountryRepositorySymbol) private readonly countryRepository: CountryRepository) {}

 getAllCountries(): Promise<CountryDto[]> {
      return this.countryRepository.getAllCountries();

      
}
 async getCountryById(id: number): Promise<CountryDto[]> {
    return await this.countryRepository.getCountryById(id);
  }
}
