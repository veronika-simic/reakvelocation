"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestModule = void 0;
const common_1 = require("@nestjs/common");
const domain_module_1 = require("../domain/domain.module");
const country_controller_1 = require("./country.controller");
const category_controller_1 = require("./category.controller");
let RestModule = class RestModule {
};
RestModule = __decorate([
    common_1.Module({
        imports: [domain_module_1.DomainModule],
        controllers: [category_controller_1.CategoryController, country_controller_1.CountryController],
    })
], RestModule);
exports.RestModule = RestModule;
//# sourceMappingURL=rest.module.js.map