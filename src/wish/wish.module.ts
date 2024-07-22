import { Module } from '@nestjs/common';
import { WishService } from './wish.service';
import { WishController } from './wish.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [WishController],
  providers: [PrismaService, WishService],
})
export class WishModule {}
