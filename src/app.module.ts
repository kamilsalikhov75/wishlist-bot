import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BotService } from './bot/bot.service';
import { ConfigModule } from '@nestjs/config';
import { UserService } from './user/user.service';
import { PrismaService } from './prisma/prisma.service';
import { EventService } from './event/event.service';
import { EventModule } from './event/event.module';

@Module({
  imports: [ConfigModule.forRoot(), EventModule],
  controllers: [AppController],
  providers: [BotService, AppService, PrismaService, UserService, EventService],
})
export class AppModule {}
