"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountryFactory = void 0;
const common_1 = require("@nestjs/common");
const country_dto_1 = require("../../domain/entities/dto/country.dto");
const country_orm_entity_1 = require("../orm/country.orm.entity");
let CountryFactory = class CountryFactory {
    buildDtoFromOrmEntity(countryOrmEnity) {
        return new country_dto_1.CountryDto(countryOrmEnity.id, countryOrmEnity.name, countryOrmEnity.description, countryOrmEnity.picture);
    }
};
CountryFactory = __decorate([
    common_1.Injectable()
], CountryFactory);
exports.CountryFactory = CountryFactory;
//# sourceMappingURL=country.factory.js.map