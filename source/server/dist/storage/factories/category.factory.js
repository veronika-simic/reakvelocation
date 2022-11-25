"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryFactory = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("../../domain/entities/dto/category.dto");
const category_orm_entity_1 = require("../orm/category.orm.entity");
let CategoryFactory = class CategoryFactory {
    buildDtoFromOrmEntity(categoryOrmEnity) {
        return new category_dto_1.CategoryDto(categoryOrmEnity.id, categoryOrmEnity.name, categoryOrmEnity.picture, categoryOrmEnity.title, categoryOrmEnity.description);
    }
};
CategoryFactory = __decorate([
    common_1.Injectable()
], CategoryFactory);
exports.CategoryFactory = CategoryFactory;
//# sourceMappingURL=category.factory.js.map