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
    // It will listen for messages that will start with `/`
    if (message.substring(0, 1) == '/') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {

            case 'hi':
                bot.sendMessage({
                    to: channelID,
                    message: 'Hello!'

                  

                })
 break;
			case 'homework':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://cdn.discordapp.com/attachments/420482155425300481/425374229333278730/JPEG_20180319_192451.jpg'

                  

                })
 break;
			case 'LT2':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuoyV8RXP91vD_y13wrnHGatRnVKM7fsePrEg-evmLbE1VCpGJ'

                  

                })
 break;
			case 'LT1':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://c1.staticflickr.com/1/665/31520134172_72de8f2487_b.jpg'

				})
break;		 
            case 'LT513':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://farm6.staticflickr.com/5797/22897112723_10b14cdda1.jpg'

                  

                })
 break;
 
             case 'LT514':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://farm5.static.flickr.com/4742/39318678164_061c463331_b.jpg'

                  

                })
 break;
 
             case 'LT516':
                bot.sendMessage({
                    to: channelID,
                    message: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR85JaswR7zR1O9q4XMg5428ucz53GZzX-U7ehBjsBq3Yfu2ckrxQ'

                  

                })
 break;
 
  
             case 'LT568':
                bot.sendMessage({
                    to: channelID,
                    message: 'http://2.bp.blogspot.com/-EfWbI-Q8IHM/VgrmDf2WUmI/AAAAAAAAHDI/7qa-yu3dWdU/s1600/IMG_9106.JPG'

                  

                })
 break;
            // Just add any case commands if you want to.. https://farm6.staticflickr.com/5797/22897112723_10b14cdda1.jpg
         }
     }
});
