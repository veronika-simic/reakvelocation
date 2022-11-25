import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryDto } from '@shop-domain/entities/dto/country.dto';
import { CountryRepository } from '@shop-domain/repositories/country.repository';
import { CountryFactory } from '@shop-storage/factories/country.factory';
import { CountryOrmEntity } from '@shop-storage/orm/country.orm.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountryStorage implements CountryRepository {
  constructor(
    @InjectRepository(CountryOrmEntity)
    private readonly countryRepository: Repository<CountryOrmEntity>,
    private readonly countryFactory: CountryFactory,
  ) {}

  async getAllCountries(): Promise<CountryDto[]> {
    const countryOrmEntity = await this.countryRepository.find();
    return countryOrmEntity.map(entity => this.countryFactory.buildDtoFromOrmEntity(entity));
  }
}
