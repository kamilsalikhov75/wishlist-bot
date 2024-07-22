import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class WishService {
  constructor(private prisma: PrismaService) {}
  create(data: Prisma.WishCreateInput) {
    return this.prisma.wish.create({ data });
  }

  findAll() {
    return `This action returns all wish`;
  }

  findOne(id: number) {
    return `This action returns a #${id} wish`;
  }

  update(id: number) {
    return `This action updates a #${id} wish`;
  }

  remove(id: number) {
    return `This action removes a #${id} wish`;
  }
}
