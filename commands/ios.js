onst { cmd } = require('../lib')
const { IOSNEWS } = require('ios-news')

cmd({
        pattern: "ios",
        category: "tool",
        react: "📰",

        filename: __filename
    },
    async(Void, citel,text) => {
      const data = await IOSNEWS()
      const ios = data.latest()
      

      const kushan = `🗞️ *BAT-BOT NEWS*\n
      ⌨️ TITLE ${data.ios.result.title}\n\n
      💎 DESCRIPTION ${data.ios.result.desc}\n\n
      🎗️ LINK ${data.ios.result.link}\n\n
©️ POWERED BY BAT-BOT`

    await Void.sendMessage(citel.chat, { image: { url: data.ios.result.images }, caption: kushan }, { quoted: citel })

    })