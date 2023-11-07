import request from 'superagent';
import base from '../request/baseRequest';

// 1. find the @BotFather bot in Telegram
// 2. Send the command - /newbot and create a bot
// 3. Create a new group and invite your bot
// 4. Get the bot token from @BotFather and save it to the .env.local
// 5. Insert the bot token to https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates
// 6. Got the chat id from the url. Delete and invite the bot one more time if there are no updates
// 7. Use the chat id for sending

export default function ({ chatId, text }) {
    const token = process.env.TELEGRAM_TOKEN;

    return base(
        request
            .get(`https://api.telegram.org/bot${token}/sendMessage`)
            .query({
                chat_id: chatId,
                parse_mode: 'html',
                text,
                no_webpage: false
            })
    );
}
