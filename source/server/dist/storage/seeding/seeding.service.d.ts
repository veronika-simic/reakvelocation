import { EntityManager } from 'typeorm';
export declare class SeedingService {
    private readonly entityManager;
    constructor(entityManager: EntityManager);
    seed(): Promise<void>;
}
