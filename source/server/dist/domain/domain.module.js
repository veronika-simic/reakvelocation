"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DomainModule = void 0;
const common_1 = require("@nestjs/common");
const country_service_1 = require("./services/country.service");
const country_factory_1 = require("./factories/country.factory");
const storage_module_1 = require("../storage/storage.module");
const category_service_1 = require("./services/category.service");
const category_factory_1 = require("./factories/category.factory");
let DomainModule = class DomainModule {
};
DomainModule = __decorate([
    common_1.Module({
        providers: [country_service_1.CountryService, country_factory_1.CountryFactory, category_service_1.CategoryService, category_factory_1.CategoryFactory],
        exports: [country_service_1.CountryService, category_service_1.CategoryService],
        imports: [storage_module_1.StorageModule],
    })
], DomainModule);
exports.DomainModule = DomainModule;
//# sourceMappingURL=domain.module.js.map