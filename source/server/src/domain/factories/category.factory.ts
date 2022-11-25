import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryFactory {
  async buildCategoryFromDto(dto: unknown[]) {
    return {
      ...dto,
    };
  }
}
