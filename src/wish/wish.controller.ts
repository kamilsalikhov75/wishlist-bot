import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WishService } from './wish.service';
import { Prisma } from '@prisma/client';

@Controller('wish')
export class WishController {
  constructor(private readonly wishService: WishService) {}

  @Post()
  create(@Body() createWishDto: Prisma.WishCreateInput) {
    return this.wishService.create(createWishDto);
  }

  @Get()
  findAll() {
    return this.wishService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.wishService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.wishService.update(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.wishService.remove(+id);
  }
}
