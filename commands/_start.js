/*CMD
  command: /start
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var wepApp = WebApp.getUrl({ command: "renderHome" });

var txt = `🎮 *Hello ${user.first_name}! Welcome to JB Games!*

🚀 Explore and play *awesome games* directly inside Telegram!

🔸 *Available Games:
  ├ Subway Surfers
  ├ Happy Wheels
  ├ Geometry Dash
  ├ Monster Truck Racing
  └ Temple Run*

✨ Tap *Open Games* to start playing now!

ᴍᴀᴅᴇ ʙʏ  @Amoais

🕹️ *JB Games — Fun Never Ends!*
`

Api.sendMessage({
  text: txt,
  reply_markup: { inline_keyboard: [
    [{ text: "Open Games", web_app: { url: wepApp } }]
  ]},
  parse_mode: "markdown"
});
