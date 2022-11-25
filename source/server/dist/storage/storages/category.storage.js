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
exports.CategoryStorage = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const category_factory_1 = require("../factories/category.factory");
const category_repository_1 = require("../../domain/repositories/category.repository");
const category_orm_entity_1 = require("../orm/category.orm.entity");
const typeorm_2 = require("typeorm");
const category_dto_1 = require("../../domain/entities/dto/category.dto");
let CategoryStorage = class CategoryStorage {
    constructor(categoryRepository, categoryFactory) {
        this.categoryRepository = categoryRepository;
        this.categoryFactory = categoryFactory;
    }
    async getAllCategories() {
        const categoryOrmEntities = await this.categoryRepository.find();
        return categoryOrmEntities.map(entity => this.categoryFactory.buildDtoFromOrmEntity(entity));
    }
    async getCategoryById(id) {
        const categoryOrmEntity = await this.categoryRepository.find({ id: id });
        return await Promise.all(categoryOrmEntity.map(cat => this.categoryFactory.buildDtoFromOrmEntity(cat)));
    }
};
CategoryStorage = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(category_orm_entity_1.CategoryOrmEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        category_factory_1.CategoryFactory])
], CategoryStorage);
exports.CategoryStorage = CategoryStorage;
//# sourceMappingURL=category.storage.js.map