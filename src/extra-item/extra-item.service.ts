import { Injectable } from '@nestjs/common';
import { PrismaClient, ExtraItem } from '@prisma/client';
import { CreateExtraItemInput } from './dto/create-extra-item.input';

const prisma = new PrismaClient();

@Injectable()
export class ExtraItemService {
  async findAll(): Promise<ExtraItem[]> {
    return await prisma.extraItem.findMany();
  }

  async findOne(id: string): Promise<ExtraItem> {
    return await prisma.extraItem.findUnique({ where: { id: parseInt(id) } });
  }

  async create(data: CreateExtraItemInput): Promise<ExtraItem> {
    return await prisma.extraItem.create({
      data: {
        ...data,
        mainItemId: data.mainItemId ? data.mainItemId : undefined,
      },
    });
  }

  async update(id: string, data: Partial<ExtraItem>): Promise<ExtraItem> {
    return await prisma.extraItem.update({
      where: { id: parseInt(id) },
      data,
    });
  }

  async delete(id: string): Promise<ExtraItem> {
    return await prisma.extraItem.delete({ where: { id: parseInt(id) } });
  }
}
