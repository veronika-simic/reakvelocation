import { Controller, Get, Param} from '@nestjs/common';
import { CategoryDto } from '@shop-domain/entities/dto/category.dto';
import { CategoryService } from '@shop-domain/services/category.service';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}


  @Get()
  getAllCategories() : Promise<CategoryDto[]> {
    return this.categoryService.getAllCategories();
  }

  @Get(':id')
  getCategoryById(
    @Param('id') id: string,
  ) {
    return this.categoryService.getCategoryById(Number(id));
  }


}
