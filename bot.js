var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});
logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: auth.token,
   autorun: true
});
bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
});
bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '/') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello!'
                 
            case 'whatsapp':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://discord.gg'
                  
                    
            case '149':
                bot.sendMessage({
                    to: channelID,
                    message: '149 to Edmonton Bridge http://londonbusesbyadam.zenfolio.com/img/s/v-3/p1784743378-4.jpg (LT599)'
                  
                     case 'homework':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/420482155425300481/425374229333278730/JPEG_20180319_192451.jpg'
                    
                });

            // Just add any case commands if you want to..
         }
     }
});
