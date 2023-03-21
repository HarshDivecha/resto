import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { MainItemService } from './main-item.service';
import { MainItem } from '@prisma/client';
import { CreateMainItemInput } from './dto/create-main-item.input';

@Controller('main-item')
export class MainItemController {
  constructor(private readonly mainItemService: MainItemService) {}

  @Get()
  findAll(): Promise<MainItem[]> {
    return this.mainItemService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string): Promise<MainItem> {
    return this.mainItemService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateMainItemInput): Promise<MainItem> {
    return this.mainItemService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<MainItem>): Promise<MainItem> {
    return this.mainItemService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<MainItem> {
    return this.mainItemService.delete(id);
  }
}
