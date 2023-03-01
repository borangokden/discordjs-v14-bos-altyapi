const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")

exports.run = async (client, message, args) => {
  
if (!message.member.permissions.has("MANAGE_MESSAGE")) return message.channel.send("Yetkiniz yetersiz kaldı, mesajları yönet yetkisine sahip olmanız gerekmekte.");
const bgmiktar = args[0]
if(!bgmiktar) return message.reply("Öncelikle bir miktar belirtin!")
message.channel.bulkDelete(bgmiktar).catch(err => message.reply("Beklenmedik bir hata oluştu!"))
message.channel.send({content: `Başarıyla ${bgmiktar} miktar mesaj silindi.`})

};
exports.conf = {
  aliases: ["temizle"]
};

exports.help = {
  name: "sil"
};
