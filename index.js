const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});
const keepAlive = require("./server")

client.on('ready', async () => {


  console.clear();

  console.log(`${client.user.tag} - titid kudanil`
  )
  bitly_axel = "https://bit.ly/3oQZWb0"

  const r = new Discord.RichPresence()
    .setApplicationId('937827593904852992')
    .setType('PLAYING') 
    .setURL('https://bit.ly/3oQZWb0')
    //.setState('F Studio')
    .setName('Google Chrome')
    //.setDetails('Editing fold.js')


    .setStartTimestamp(Date.now())
    //.setAssetsLargeImage('https://cdn.discordapp.com/attachments/973124172479856726/1127194031659692043/images.jpg')
    //.setAssetsLargeText('images')
    //.setAssetsSmallImage('https://cdn.discordapp.com/attachments/975337808422137877/1126475448768016446/javascript-39413.png')
    //.setAssetsSmallText('javascript-39413')
        //.addButton('Connect', "https://cfx.re/join/r35px8")
    //.addButton('Discord',"https://discord.gg/kaVBxkRVkP")

  client.user.setActivity(r);
  client.user.setPresence({ status: "dnd" });
})
require('dotenv').config();
keepAlive();
client.login(process.env.token) //Your account token

// man put ur token in secrets