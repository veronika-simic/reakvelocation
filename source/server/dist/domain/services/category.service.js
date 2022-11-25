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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("../entities/dto/category.dto");
const country_dto_1 = require("../entities/dto/country.dto");
const category_repository_1 = require("../repositories/category.repository");
const country_repository_1 = require("../repositories/country.repository");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    getAllCategories() {
        return this.categoryRepository.getAllCategories();
    }
    async getCategoryById(id) {
        return await this.categoryRepository.getCategoryById(id);
    }
};
CategoryService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(category_repository_1.CategoryRepositorySymbol)),
    __metadata("design:paramtypes", [Object])
], CategoryService);
exports.CategoryService = CategoryService;
//# sourceMappingURL=category.service.js.map