import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { RestModule } from '@shop-rest/rest.module';
import { SeedingModule } from '@shop-storage/seeding/seeding.module';
import { SeedingService } from '@shop-storage/seeding/seeding.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5433,
      username: 'postgres',
      password: 'postgres',
      database: 'reakvelocation',
      synchronize: true,
      logging: true,
      autoLoadEntities: true,
    }),
    RestModule,
    SeedingModule,
  ],
})
export class AppModule implements OnApplicationBootstrap {
  constructor(private readonly seedingService: SeedingService) {}

  async onApplicationBootstrap(): Promise<void> {
    await this.seedingService.seed();
  }
}
