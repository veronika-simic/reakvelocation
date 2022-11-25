"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StorageModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const country_storage_1 = require("./storages/country.storage");
const country_orm_entity_1 = require("./orm/country.orm.entity");
const country_factory_1 = require("./factories/country.factory");
const country_repository_1 = require("../domain/repositories/country.repository");
const category_factory_1 = require("./factories/category.factory");
const category_repository_1 = require("../domain/repositories/category.repository");
const category_storage_1 = require("./storages/category.storage");
const category_orm_entity_1 = require("./orm/category.orm.entity");
let StorageModule = class StorageModule {
};
StorageModule = __decorate([
    common_1.Module({
        providers: [
            country_factory_1.CountryFactory,
            {
                provide: country_repository_1.CountryRepositorySymbol,
                useClass: country_storage_1.CountryStorage,
            },
            category_factory_1.CategoryFactory,
            {
                provide: category_repository_1.CategoryRepositorySymbol,
                useClass: category_storage_1.CategoryStorage,
            },
        ],
        exports: [country_repository_1.CountryRepositorySymbol, category_repository_1.CategoryRepositorySymbol],
        imports: [typeorm_1.TypeOrmModule.forFeature([country_orm_entity_1.CountryOrmEntity]), typeorm_1.TypeOrmModule.forFeature([category_orm_entity_1.CategoryOrmEntity])],
    })
], StorageModule);
exports.StorageModule = StorageModule;
//# sourceMappingURL=storage.module.js.map