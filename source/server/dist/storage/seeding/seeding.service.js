"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SeedingService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const country_orm_entity_1 = require("../orm/country.orm.entity");
const country_seeds_1 = require("./country.seeds");
const category_orm_entity_1 = require("../orm/category.orm.entity");
const category_seeds_1 = require("./category.seeds");
let SeedingService = class SeedingService {
    constructor(entityManager) {
        this.entityManager = entityManager;
    }
    async seed() {
        await Promise.all([this.entityManager.save(country_orm_entity_1.CountryOrmEntity, [...country_seeds_1.initialCountries])]);
        await Promise.all([this.entityManager.save(category_orm_entity_1.CategoryOrmEntity, [...category_seeds_1.initialCategories])]);
    }
};
SeedingService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.EntityManager])
], SeedingService);
exports.SeedingService = SeedingService;
//# sourceMappingURL=seeding.service.js.map