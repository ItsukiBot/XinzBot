exports.menu = (prefix, i) => {
    return `*Hmm...*
`
}

exports.newMenu = (ucapan, ownerName, botName, prefix, pendaftar, runtime, pushname, isOwner, isPremium, sisalimit, limitCount, glimit, gcount, expired, tanggal, jam) => {
    return `╒═══  </ItsukiBot> ═══
├ *Developer Name : Itsuki*
├ *Baileys : V.3.5.2*
├ *Prefix : 「 MULTI 」*
├ *Database : ${pendaftar.length}*
├ *Date : ${tanggal}*
├ *Time : ${jam}*
├ *Runtime* : *${runtime}*
╘═══ 「 ITSUKI BOT 」 ═══

╒══ </User Info>  ═══
├ *UserName* : *${pushname}*
├ *Your Status* : *${isOwner ? 'Owner' : isPremium ? 'Premium ⚜️' : 'Gratisan 🚮'}*
├ *Your Limit* : *${isPremium ? 'Unlimited' : `${sisalimit}/${limitCount}`}*
├ *Your Limit Game* : *${isOwner ? 'Unlimited' : `${glimit}/${gcount}`}*
╘═══ 『 ITSUKI BOT 』 ═══

╒════ </SIMPLE MENU> ═══
├ *${prefix}creatormenu*
├ *${prefix}stickermenu*
├ *${prefix}groupmenu*
├ *${prefix}sistemmenu*
├ *${prefix}gabutmenu*
├ *${prefix}gamemenu*
├ *${prefix}downloadmenu*
├ *${prefix}searchmenu*
├ *${prefix}stalkmenu*
├ *${prefix}randommenu*
├ *${prefix}animemenu*
├ *${prefix}nsfwmenu*
├ *${prefix}toolsmenu*
├ *${prefix}makermenu*
├ *${prefix}othermenu*
╘═══ 「 ITSUKI BOT 」 ═══

╒════ SPECIALLY THANKS TO ═══
├≽ *Itsuki [ wa.me/60199782326 ]*
├≽ *Xinz-Team*
├≽ *Ramlan ID*
╘═══ 「 ITSUKI BOT 」 ═══

created with ❤️ by itsuki`
}

exports.stickerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STICKER MENU* 》 ═══
├ *${prefix}sticker*
├ *${prefix}stickergif*
├ *${prefix}swm*
├ *${prefix}take*
├ *${prefix}toimg*
├ *${prefix}tovideo*
├ *${prefix}attp*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.ownerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *CREATOR MENU* 》 ═══
├ *${prefix}addprem*
├ *${prefix}delprem*
├ *${prefix}ban <@tag>*
├ *${prefix}unban <@tag>*
├ *${prefix}join <link group>*
├ *${prefix}addbadword <word>*
├ *${prefix}delbadword <word>*
├ *${prefix}addchangelog <text>*
├ *${prefix}public*
├ *${prefix}self*
├ *${prefix}exif*
├ *${prefix}bc <text>*
├ *${prefix}setprefix <prefix>*
├ *${prefix}setthumb <reply picture>*
├ *${prefix}clearall <all/chat/group>*
├ *> [eval]*
├ *$ [code cmd]*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.groupMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GROUP MENU* 》 ═══
├ *${prefix}afk*
├ *${prefix}infogrup*
├ *${prefix}add <nomor>*
├ *${prefix}kick <nomor/ @tag>*
├ *${prefix}promote <@tag>*
├ *${prefix}demote <@tag>*
├ *${prefix}linkgc*
├ *${prefix}leave*
├ *${prefix}setdesc <text>*
├ *${prefix}setgrupname <text>*
├ *${prefix}setppgrup <reply picture>*
├ *${prefix}opengrup*
├ *${prefix}closegrup*
├ *${prefix}tagall <text> (text is optional)*
├ *${prefix}tagme*
├ *${prefix}kontak <@tag>*
├ *${prefix}hidetag <text>*
├ *${prefix}getpp <@tag>*
├ *${prefix}mute*
├ *${prefix}unmute*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.sistemMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SISTEM MENU* 》 ═══
├≽ *${prefix}antilink*
├≽ *${prefix}antibadword*
├≽ *${prefix}welcome*
├≽ *${prefix}left*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gabutMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GABUT MENU* 》 ═══
├ *${prefix}apakah*
├ *${prefix}bisakah*
├ *${prefix}kapankah*
├ *${prefix}hobby*
├ *${prefix}rate*
├ *${prefix}cekbapak*
├ *${prefix}seberapagay*
├ *${prefix}truth*
├ *${prefix}dare*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.gameMenu = (prefix, ownerName) => {
    return `╒═══ 《 *GAME MENU* 》 ═══
├ *${prefix}tictactoe <@tag>*
├ *${prefix}delttt*
├ *${prefix}tebakgambar*
├ *${prefix}family100*
├ *${prefix}suit*
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.downloadMenu = (prefix, ownerName) => {
    return `╒═══ 《 *DOWNLOAD MENU* 》 ═══
├≽ *${prefix}ytmp3*
├≽ *${prefix}ytmp4*
├≽ *${prefix}play*
├≽ *${prefix}playmp4*
├≽ *${prefix}tiktok*
├≽ *${prefix}tiktokmp3*
├≽ *${prefix}instagram*
├≽ *${prefix}facebook*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.searchMenu = (prefix, ownerName) => {
    return `╒═══ 《 *SEARCH MENU* 》 ═══
├────────────────────
├≽ *${prefix}yts*
├≽ *${prefix}pinterest*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.stalkMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STALKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}igstalk*
├≽ *${prefix}ghstalk*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.randomMenu = (prefix, ownerName) => {
    return `╒═══ 《 *RANDOM MENU* 》 ═══
├────────────────────
├≽ *${prefix}quotes*
├≽ *${prefix}darkjokes
├≽ *${prefix}pantun
├≽ *${prefix}bucin
├≽ *${prefix}cehor
├≽ *${prefix}fakta
├≽ *${prefix}katabijak
├≽ *${prefix}motivasi
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.animeMenu = (prefix, ownerName) => {
    return `╒═══ 《 *ANIME MENU* 》 ═══
├────────────────────
├≽ *${prefix}waifu*
├≽ *${prefix}loli*
├≽ *${prefix}husbu*
├≽ *${prefix}shota*
├≽ *${prefix}nekonime*
├≽ *${prefix}megumin*
├≽ *${prefix}sagiri*
├≽ *${prefix}shinobu*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.toolsMenu = (prefix, ownerName) => {
    return `╒═══ 《 *TOOLS MENU* 》 ═══
├────────────────────
├≽ *${prefix}nulis*
├≽ *${prefix}nuliskiri*
├≽ *${prefix}nuliskanan*
├≽ *${prefix}foliokiri*
├≽ *${prefix}foliokanan*
├≽ *${prefix}tinyurl*
├≽ *${prefix}translate*
├≽ *${prefix}ebase64*
├≽ *${prefix}debase64*
├≽ *${prefix}ehex*
├≽ *${prefix}dehex*
├≽ *${prefix}ebinary*
├≽ *${prefix}debinary*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.makerMenu = (prefix, ownerName) => {
    return `╒═══ 《 *MAKER MENU* 》 ═══
├────────────────────
├≽ *${prefix}hartatahta*
├≽ *${prefix}neon*
├≽ *${prefix}matrix*
├≽ *${prefix}blackpink*
├≽ *${prefix}halloween*
├≽ *${prefix}thundername*
├≽ *${prefix}devilwings*
├≽ *${prefix}cloudtext*
├≽ *${prefix}bloodtext*
├≽ *${prefix}bloodtext2*
├≽ *${prefix}steeltext*
├≽ *${prefix}lavatext*
├≽ *${prefix}toxiclogo*
├≽ *${prefix}dropwater*
├≽ *${prefix}metaldark*
├≽ *${prefix}sandwrite*
├≽ *${prefix}3dwater*
├≽ *${prefix}graffiti*
├≽ *${prefix}graffiti2*
├≽ *${prefix}phlogo*
├≽ *${prefix}glitch*
├≽ *${prefix}graffiti3*
├≽ *${prefix}layeredtext*
├≽ *${prefix}vintage*
├≽ *${prefix}3dspace*
├≽ *${prefix}stonetext*
├≽ *${prefix}avengers*
├≽ *${prefix}marvellogo*
├≽ *${prefix}3dmetal*
├≽ *${prefix}lionlogo*
├≽ *${prefix}wolflogo*
├≽ *${prefix}ninjalogo*
├≽ *${prefix}pubglogo*
├≽ *${prefix}shadowtext*
├≽ *${prefix}smoketext*
├≽ *${prefix}romancetext*
├≽ *${prefix}carvedwood*
├≽ *${prefix}harrypotter*
├≽ *${prefix}flamingtext*
├≽ *${prefix}falleaves*
├≽ *${prefix}underwater*
├≽ *${prefix}wolfmetal*
├≽ *${prefix}woodboard*
├≽ *${prefix}undergrass*
├≽ *${prefix}coffetext*
├≽ *${prefix}lovetext*
├≽ *${prefix}burnpaper*
├≽ *${prefix}lovemessage*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.otherMenu = (prefix, ownerName) => {
    return `╒═══ 《 *OTHER MENU* 》 ═══
├────────────────────
├≽ *cekprefix*
├≽ *${prefix}stats*
├≽ *${prefix}limit*
├≽ *${prefix}balance*
├≽ *${prefix}runtime*
├≽ *${prefix}speed*
├≽ *${prefix}owner*
├≽ *${prefix}donasi*
├≽ *${prefix}sourcecode*
├≽ *${prefix}cekprem*
├≽ *${prefix}listprem*
├≽ *${prefix}listban*
├≽ *${prefix}listbadword*
├≽ *${prefix}buylimit*
├≽ *${prefix}buyglimit*
├≽ *${prefix}topglobal*
├≽ *${prefix}toplocal*
├≽ *${prefix}readmore*
├≽ *${prefix}cekapikey*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.hentaiMenu = (prefix, ownerName) => {
    return `╒═══ 《 *18+ MENU* 》 ═══
├────────────────────
├≽ *${prefix}randomhentong*
├≽ *${prefix}kemonomimi*
├≽ *${prefix}ero*
├≽ *${prefix}echi*
├≽ *${prefix}ahegao*
├≽ *${prefix}trap*
├≽ *${prefix}neko*
├≽ *${prefix}blowjob*
├≽ *${prefix}kitsune*
├≽ *${prefix}yuri*
├≽ *${prefix}boobs*
├≽ *${prefix}kuni*
├─────────────────────
╘═══ 《 *By ${ownerName}* 》 ═══`
}

exports.storageMenu = (prefix, ownerName) => {
    return `╒═══ 《 *STORAGE MENU* 》 ═══
├ DALAM PEMBAIKAN
╘═══ 《 *By ${ownerName}* 》 ═══`
}
