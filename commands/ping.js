const {EmbedBuilder} = require("discord.js");
const config = require("../config.js")

exports.run = async (client, message, args) => {

message.channel.send({content: `Anlık olarak pingim; **"${client.ws.ping}ms"**`});

};
exports.conf = {
  aliases: ["pong"]
};

exports.help = {
  name: "ping"
};