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
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const config_1 = require("@nestjs/config");
const rest_module_1 = require("./rest/rest.module");
const seeding_module_1 = require("./storage/seeding/seeding.module");
const seeding_service_1 = require("./storage/seeding/seeding.service");
let AppModule = class AppModule {
    constructor(seedingService) {
        this.seedingService = seedingService;
    }
    async onApplicationBootstrap() {
        await this.seedingService.seed();
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot(),
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5433,
                username: 'postgres',
                password: 'postgres',
                database: 'reakvelocation',
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
            }),
            rest_module_1.RestModule,
            seeding_module_1.SeedingModule,
        ],
    }),
    __metadata("design:paramtypes", [seeding_service_1.SeedingService])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map