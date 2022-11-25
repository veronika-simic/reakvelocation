import { Injectable } from '@nestjs/common';

@Injectable()
export class CountryFactory {
  async buildCountryFromDto(dto: unknown[]) {
    return {
      ...dto,
    };
  }
}
