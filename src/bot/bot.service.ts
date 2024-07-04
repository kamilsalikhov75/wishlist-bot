import { Injectable, OnModuleInit } from '@nestjs/common';

import TelegramBot = require('node-telegram-bot-api');
import { UserService } from 'src/user/user.service';

@Injectable()
export class BotService implements OnModuleInit {
  constructor(private userService: UserService) {}
  async onModuleInit() {
    this.botMessage();
  }

  async botMessage() {
    const bot = new TelegramBot(process.env.BOT_API_TOKEN, { polling: true });

    bot.on('message', async (msg) => {
      if (msg.text === '/start') {
        const { from, chat } = msg;
        try {
          const user = await this.userService.getUserByTelegramId(
            from.id.toString(),
          );

          if (!user) {
            await this.userService.createUser({
              telegramId: `${from.id}`,
              username: from.username,
              avatar: '',
              firstName: from.first_name,
            });
          }
        } finally {
          bot.sendMessage(
            chat.id,
            `Привет, ${from.first_name || from.username}`,
          );
        }
      }
    });
  }
}
