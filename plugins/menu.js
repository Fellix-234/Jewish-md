const config = require('../config');

module.exports = {
    command: ['menu', 'help', 'list', 'panel'],
    async execute(ctx) {
        const { reply, pushName, isOwner } = ctx;

        let date = new Date().toLocaleDateString("EN", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
        let time = new Date().toLocaleTimeString("EN", {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
        });

        const menuText = `
╔════════════════════════════════════════════╗
║     ⚡ P E A K Y  B L I N D E R S ⚡      ║
║   — The Sharpest Blades in Birmingham —   ║
╚════════════════════════════════════════════╝

*👨 Gentleman:* ${pushName}
*👑 Boss:* ${config.ownerName}
*📅 Date:* ${date}
*⌚ Time:* ${time}
*🏘️ Territory:* ${config.location}
*⚔️ Prefix:* ${config.prefix}
*🎯 Mode:* ${config.workType.toUpperCase()}

╔════════════════════════════════════════════╗

*🗡️ CORE COMMANDS*
  ${config.prefix}alive    ⟶ Check if I'm breathing
  ${config.prefix}ping     ⟶ Test the connection
  ${config.prefix}menu     ⟶ Show this menu
  ${config.prefix}quote    ⟶ Shelby's wisdom
  ${config.prefix}system   ⟶ System information

*👊 GANG MANAGEMENT*
  ${config.prefix}promote @user   ⟶ Elevate them
  ${config.prefix}demote @user    ⟶ Demote them
  ${config.prefix}kick @user      ⟶ Remove from gang
  ${config.prefix}hidetag         ⟶ Group announcement
  ${config.prefix}welcome         ⟶ Group welcome message
  ${config.prefix}groupinfo       ⟶ Group statistics
  ${config.prefix}owner           ⟶ Group owner info

*🎲 ENTERTAINMENT*
  ${config.prefix}gamble   ⟶ Test your luck
  ${config.prefix}flip     ⟶ Flip a coin
  ${config.prefix}dice     ⟶ Roll the dice
  ${config.prefix}rps      ⟶ Rock paper scissors
  ${config.prefix}riddle   ⟶ Solve a riddle
  ${config.prefix}joke     ⟶ Hear a joke

*💰 ECONOMY SYSTEM*
  ${config.prefix}work     ⟶ Do a job, earn coins
  ${config.prefix}bal      ⟶ Check your balance
  ${config.prefix}give @user <amount>  ⟶ Transfer coins
  ${config.prefix}rob @user            ⟶ Steal from someone
  ${config.prefix}rank     ⟶ Your gang rank
  ${config.prefix}stats    ⟶ Your statistics
  ${config.prefix}profile  ⟶ Your profile

*🔮 MODERATION*
  ${config.prefix}mute @user      ⟶ Silence a member
  ${config.prefix}unmute @user    ⟶ Restore voice
  ${config.prefix}warn @user      ⟶ Issue a warning
  ${config.prefix}warnings        ⟶ Warning system

*📸 MEDIA & TOOLS*
  ${config.prefix}sticker <text>  ⟶ Create sticker
  ${config.prefix}qr <text>       ⟶ Generate QR code
  ${config.prefix}reverse <text>  ⟶ Reverse text
  ${config.prefix}phonetic <text> ⟶ Military phonetic
  ${config.prefix}calc <math>     ⟶ Calculator
  ${config.prefix}convert <value> <unit>  ⟶ Temperature/distance

*🔍 INFORMATION*
  ${config.prefix}google <query>  ⟶ Search Google
  ${config.prefix}wiki <query>    ⟶ Wikipedia search
  ${config.prefix}userinfo        ⟶ User information
  ${config.prefix}weather <city>  ⟶ Weather report
  ${config.prefix}time            ⟶ Current time
  ${config.prefix}date            ⟶ Current date
  ${config.prefix}timezone        ⟶ Timezone info

*🎵 MUSIC & MEDIA*
  ${config.prefix}song <name>     ⟶ Search for music
  ${config.prefix}lyrics <song>   ⟶ Get song lyrics
  ${config.prefix}ytmp3 <url>     ⟶ YouTube to MP3
  ${config.prefix}ytmp4 <url>     ⟶ YouTube to MP4

*📱 SOCIAL MEDIA*
  ${config.prefix}igdl <url>      ⟶ Instagram download
  ${config.prefix}tiktok <url>    ⟶ TikTok download
  ${config.prefix}twitter <url>   ⟶ Twitter download
  ${config.prefix}fb <url>        ⟶ Facebook download

*🎭 ANIME & MANGA*
  ${config.prefix}anime <name>    ⟶ Search anime
  ${config.prefix}manga <name>    ⟶ Search manga
  ${config.prefix}waifu           ⟶ Random waifu

*🤖 AI & AUTOMATION*
  ${config.prefix}ai <question>   ⟶ Ask AI
  ${config.prefix}gpt <question>  ⟶ ChatGPT style
  ${config.prefix}ask <question>  ⟶ Get answers

*👑 BOSS COMMANDS*
  ${config.prefix}restart         ⟶ Restart the bot
  ${config.prefix}broadcast <msg> ⟶ Send to all groups
  ${config.prefix}update          ⟶ Check updates

╔════════════════════════════════════════════╗

⚔️ *By Order of the Peaky Blinders* ⚔️
🔥 Version ${config.botVersion} | © ${new Date().getFullYear()}

*"Small health and mental strength. That's what the Sober and Industrious require."*
        `.trim();

        await reply(menuText);
    }
};
