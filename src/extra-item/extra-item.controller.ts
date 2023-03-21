import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ExtraItemService } from './extra-item.service';
import { ExtraItem } from '@prisma/client';
import { CreateExtraItemInput } from './dto/create-extra-item.input';

@Controller('extra-item')
export class ExtraItemController {
  constructor(private readonly extraItemService: ExtraItemService) {}

  @Get()
  findAll(): Promise<ExtraItem[]> {
    return this.extraItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ExtraItem> {
    return this.extraItemService.findOne(id);
  }

  @Post()
  create(@Body() data: CreateExtraItemInput): Promise<ExtraItem> {
    return this.extraItemService.create(data);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() data: Partial<ExtraItem>): Promise<ExtraItem> {
    return this.extraItemService.update(id, data);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ExtraItem> {
    return this.extraItemService.delete(id);
  }
}
