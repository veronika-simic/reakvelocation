import { OnApplicationBootstrap } from '@nestjs/common';
import { SeedingService } from '@shop-storage/seeding/seeding.service';
export declare class AppModule implements OnApplicationBootstrap {
    private readonly seedingService;
    constructor(seedingService: SeedingService);
    onApplicationBootstrap(): Promise<void>;
}
