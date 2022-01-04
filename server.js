//Paketler
const express = require("express");
const app = express();
const TelegramBot = require('node-telegram-bot-api');

const token = ""

// Server çalışma durumu için HTML kontrol
app.get("/eduMate", (request, response) => {
    response.sendFile(__dirname + "/views/index.html");
  });
  
// bir REST api ile değiştirelim
const notlar = [
    "Pattern: https://www.patterns.dev/posts/classic-design-patterns/",
    "vanilla-js: https://medium.com/mahmutgundogdu/vanilla-js-nedir-abaabf3eeab8"
]
 
const bot = new TelegramBot(token, {polling: true});

// sohbet botunu kodlayalım
bot.on('message', (msg) => {

  const selam = "selam";
  if (msg.text.toString().toLowerCase().indexOf(selam) === 0) {
  bot.sendMessage(msg.chat.id,"Selam, sana nasıl yardımcı olabilirim?");
  }

  const not = "notlar";
  if (msg.text.toString().toLowerCase().includes(not)) {
  bot.sendMessage(msg.chat.id,"Arkadaşlarımızın paylaştığı kişisel notları sana gönderiyorum :)");
    for(let i = 0; i < notlar.length; i++){
      bot.sendMessage(msg.chat.id,notlar[i]);
    }
  }
  
});

//Polling bazlı hataları görmek isterseniz eğer
//bot.on("polling_error", console.log);
