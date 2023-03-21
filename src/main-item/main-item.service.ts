import { Injectable } from '@nestjs/common';
import { PrismaClient, MainItem  } from '@prisma/client';
import { CreateMainItemInput } from './dto/create-main-item.input';

const prisma = new PrismaClient();

@Injectable()
export class MainItemService {
  async findAll(): Promise<MainItem[]> {
    return await prisma.mainItem.findMany({
      include: { extras: true },
    });
  }

  async findOne(id: string): Promise<MainItem> {
    return await prisma.mainItem.findUnique({
      where: { id: parseInt(id) },
      include: { extras: true },
    });
  }

  async create(data: CreateMainItemInput): Promise<MainItem> {
    return await prisma.mainItem.create({ data });
  }

  async update(id: string, data: Partial<MainItem>): Promise<MainItem> {
    return await prisma.mainItem.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async delete(id: string): Promise<MainItem> {
    return await prisma.mainItem.delete({ where: { id: parseInt(id)  } });
  }
}
