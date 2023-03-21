import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { MenuService } from './menu.service';
import { CreateMenuInput } from './dto/create-menu.input';
import { Menu } from '@prisma/client';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  create(@Body() createMenuInput: CreateMenuInput): Promise<Menu> {
    return this.menuService.create(createMenuInput);
  }

  @Get()
  findAll(): Promise<Menu[]> {
    return this.menuService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Menu> {
    return this.menuService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMenuInput: Partial<Menu>): Promise<Menu> {
    return this.menuService.update(id, updateMenuInput);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<Menu> {
    return this.menuService.delete(id);
  }
}
