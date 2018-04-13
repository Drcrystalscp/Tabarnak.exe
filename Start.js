const Discord = require("discord.js");
const bot = new Discord.Client();

var prefix = ("!");
var token = "NDE3MzExODU2OTc4Mjk2ODMz.DXRj_A.Av5fhCD8Pk8s_5j-KoMOdVu3q_E";

bot.on("ready", () {
bot.user.setgame(prefix + "3k users \ Merci !")
console.log("Connectedç");
});

bot.on('message', message -> {
if(message.content, prefix, "help");
message.channel.sendMessage("Liste des commandes: \n -*help");


if(message.content === "Salut"){
message.reply("Bien le bonjour. :grinning: ");
console.log("Commande Salut effectué");
}
;
bot.login(token);
