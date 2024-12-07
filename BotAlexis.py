from telebot import TeleBot

TOKEN = "7665483640:AAHm4hBI9DF-nWhuCorzS_ffDFTy_FVQNsE"

bot = TeleBot(TOKEN)


@bot.message_handler(commands=["start", "help"])
def send_welcome(message):
    print(message)
    bot.reply_to(message,"Привет, я Алексис, и я люблю покусывать перчики!" )


@bot.message_handler(func=lambda message: True)
def echo_all(message):
    print(message)
    bot.reply_to(message, message.text)

bot.infinity_polling()
