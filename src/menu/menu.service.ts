import { Injectable } from '@nestjs/common';
import { PrismaClient, Menu } from '@prisma/client';
import { CreateMenuInput } from './dto/create-menu.input';

const prisma = new PrismaClient();

@Injectable()
export class MenuService {
  async findAll(): Promise<Menu[]> {
    return await prisma.menu.findMany({
      include: { mainItems: true },
    });
  }

  async findOne(id: string): Promise<Menu> {
    return await prisma.menu.findUnique({
      where: { id: parseInt(id) },
      include: { mainItems: true },
    });
  }

  async create(data: CreateMenuInput): Promise<Menu> {
    return await prisma.menu.create({ data });
  }

  async update(id: string, data: Partial<Menu>): Promise<Menu> {
    return await prisma.menu.update({
      where: { id: parseInt(id) }, 
      data,
    });
  }

  async delete(id: string): Promise<Menu> {
    return await prisma.menu.delete({ where: { id: parseInt(id)  } });
  }
}
