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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryStorage = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const country_dto_1 = require("../../domain/entities/dto/country.dto");
const country_repository_1 = require("../../domain/repositories/country.repository");
const country_factory_1 = require("../factories/country.factory");
const country_orm_entity_1 = require("../orm/country.orm.entity");
const typeorm_2 = require("typeorm");
let CountryStorage = class CountryStorage {
    constructor(countryRepository, countryFactory) {
        this.countryRepository = countryRepository;
        this.countryFactory = countryFactory;
    }
    async getAllCountries() {
        const countryOrmEntity = await this.countryRepository.find();
        return countryOrmEntity.map(entity => this.countryFactory.buildDtoFromOrmEntity(entity));
    }
};
CountryStorage = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(country_orm_entity_1.CountryOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        country_factory_1.CountryFactory])
], CountryStorage);
exports.CountryStorage = CountryStorage;
//# sourceMappingURL=country.storage.js.map