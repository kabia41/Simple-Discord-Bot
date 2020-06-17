const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token, botname } = require('./config.json');
const colors = require('colors');

client.once('ready', () => {
    console.log('Discord bot is up! Bot name: "' + botname + '"');
});

client.on('message', message => {
    if (message.content === '!ping') {
        const pingembed = new Discord.MessageEmbed()
    .setAuthor(botname, 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')    .setColor('#00F3FF')
    .setTitle('**Pong**')
        message.channel.send(pingembed);
    }
    else if (message.content === `!server`) {
        const SunucuEmbed = new Discord.MessageEmbed()
        .setColor('#0099ff')
        .setTitle('**!!Sunucu Bilgileri!!**')
        .setAuthor(botname, 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')
        .setDescription('Bot of Nerdy')
        .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')
        .addFields(
            { name: '\u200B', value: '\u200B' },
            { name: '**Sunucu İsmi**', value: message.guild.name },
            { name: '**Sunucu Katılımcı Sayısı**', value: message.guild.memberCount },
        )
        .setTimestamp()
        .setFooter('Send help to Nerdy', 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/');
    
            message.author.send(SunucuEmbed);    
    }
    else if (message.content.startsWith(`!beep`)) {
        const beepembed = new Discord.MessageEmbed()
    .setAuthor(botname, 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')    .setColor('#00F3FF')
    .setTitle('**Boop**')
        message.channel.send(beepembed);
    }
    else if (message.content.startsWith(`!testcommand`)) {
        if (message.author.username == 'World Of ANIME') {
            const testembed = new Discord.MessageEmbed()
        .setColor('#00F3FF')
        .setTitle('**Test Command**')
        .setAuthor(botname)
        .setDescription('**Test Command Executed**')
        .setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')
            message.author.send(testembed)
        } else {
            const testembed = new Discord.MessageEmbed()
        .setColor('#00F3FF')
        .setTitle('**Test Command**')
        .setAuthor(botname)
        .setDescription('**You are not nerdy!**')
            message.author.send(testembed)
        }
    }
    else if (message.content.startsWith('!commands')) {
        const exampleEmbed = new Discord.MessageEmbed()
	.setColor('#399A26')
	.setTitle('**!!Commands!!**')
	.setAuthor(botname, 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')
	.setDescription('Bot of Nerdy')
	.setThumbnail('https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/')
	.addFields(
		{ name: '***Some commands***', value: '***5 Commands***' },
		{ name: '\u200B', value: '\u200B' },
		{ name: '**!server**', value: '*Gives information for the server*' },
        { name: '**!commands**', value: '*Shows the commands*' },
        { name: '**!beep**', value: '*Fun Command*' },
        { name: '**!ping**', value: '*Fun Command*' },
        { name: '**!testcommand**', value: '*Only nerdy can execute this command*' }
	)
	.setTimestamp()
	.setFooter('Send help to Nerdy', 'https://steamuserimages-a.akamaihd.net/ugc/945081401924436013/8E29ECAE9C4CD0FCBAAC94D53683A5373D55B4A0/');

        message.author.send(exampleEmbed);
    }
 
    if (message.author.username = 'World Of ANIME') {
        console.log(colors.red(message.content));
    }
});

client.login(token);