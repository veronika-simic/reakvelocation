/* eslint-disable prettier/prettier */
import { Controller, Get} from '@nestjs/common';
import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryService } from '@shop-domain/services/country.service';

@Controller('countries')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}


  @Get()
  getAllCountries() : Promise<CountryDto[]> {
    return this.countryService.getAllCountries();
  }

}
