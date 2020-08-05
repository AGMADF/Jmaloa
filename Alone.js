const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://.glitch.me/`);
}, 280000);


const discord = require ("discord.js")
const client = new discord.Client();
const prefix = ['+'] // البرفكس

client.on("ready" , () => {
    console.log(client.user.tag)
    console.log(`Servers : [${client.guilds.size}]`)
    console.log(`Channels : [${client.channels.size}]`)
    console.log(`Users : [${client.users.size}]`)
    console.log(`Start [${new Date}]`)
    console.log("The bot is ready , Made By Alone")
})

// للجميع

client.on("message" , message => {
  if(!message.channel.guild) return;
    if(message.content.startsWith(prefix + "bc")) {
      if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("**ليس لديك الصلاحيات الكافية**")
        let args = message.content.split(" ").slice(1)
        let argss = args.join(" ")
        message.guild.members.filter(a => a.presence.status !== "all").forEach(e => {
            e.send(`${argss}\n ${e}`)
        })
            message.channel.send(`\`${message.guild.members.filter(a => a.presence.status !== "all").size}\` : عدد الأعضاء المستلمين`)
          .then((message => {message.delete(3000)})
          
                )}
})

client.on("message" , message => {
  
  if(!message.channel.guild) return;
  var args = message.content.split(" ").slice(1)
    var argss = args.join(" ")
  if(message.content.startsWith(prefix + "bc")) {
    if(!message.member.hasPermissions("ADMINISTRATOR")) return message.reply("**ليس لديك الصلاحيات الكافية**")
    let embed = new discord.RichEmbed()
    .setAuthor(client.user.username , client.user.avatarURL)
    .addField("**السيرفر :**" , `${message.guild.name}`)
    .addField("**المرسل :**" , `${message.author.username}`)
    .addField("**الرسالة :**" , `${argss}`)
    message.guild.members.filter(e => e.presence.status !== "all").forEach(t => {
      t.send(embed)
      }) 
      message.channel.send(`\`${message.guild.members.filter(e => e.presence.status !== "all").size}\` : عدد الأعضاء المستلمين`)
      .then(message => {message.delete(3000)})
  }
})



client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : osama tech`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : osama tech ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`+bc`,"http://twitch.tv/mohamj2002") //باسم سيرفرك او اي شي تبيه hello تعديل مهم عدل كلمة 
client.user.setStatus("dnd")
});



client.login(process.env.BOT_ALONE)