 const moment = require("moment-timezone")
 const Config = require('../config')
 let { fancytext, tlang, tiny, botpic ,prefix,cmd } = require("../lib");
 let sᴜʜᴀɪʟ_ᴍᴅ ;
 
const {updateProfilePicture,forwardMessage, getAdmin} = require("../lib")




///============================================================================================
cmd({ pattern: "ptv", desc: "send ptv Message of video", category: "whatsapp",filename: __filename},async(Suhail, msg, text,{cmdName , isCreator}) => {
   if(!msg.quoted) return await msg.send("*Uhh please, reply to a video Message*")
   let mtype = msg.quoted.mtype 
   if(mtype !== "videoMessage") return await msg.send("*Replied Message is not a video, Idiot.*")
   return await forwardMessage(msg.chat, Suhail, msg, cmdName )
})////------------------------------------------------------------
cmd({pattern: "#", desc: "Save whatsapp status",category: "whatsapp",filename: __filename},async(Suhail, msg, text,{cmdName , isCreator}) => {
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to whatsapp status*")
   let sᴜʜᴀɪʟ_ᴍᴅ_num = await Suhail.bot.decodeJid(msg.user)
   return await forwardMessage(sᴜʜᴀɪʟ_ᴍᴅ_num, Suhail, msg, cmdName )
})//--------------------------------------------------------------------
cmd({pattern: "save1",desc: "Save Message to log number",category: "whatsapp",filename: __filename},async(Suhail, msg, text,{cmdName , isCreator}) => {
   if(!isCreator) return await msg.send(tlang().owner)
   if(!msg.quoted) return await msg.send("*Uhh Please, reply to a Message*")
   let sᴜʜᴀɪʟ_ᴍᴅ_num = await Suhail.bot.decodeJid(msg.user)
   return await forwardMessage(sᴜʜᴀɪʟ_ᴍᴅ_num, Suhail, msg, cmdName )
})///================================================================================
cmd({ on: "text" }, async (Suhail,msg,text)=> {
   if(msg.quoted && msg.text.toLowerCase().includes("send") ){
       let sᴜʜᴀɪʟ_ᴍᴅ_num = await Suhail.bot.decodeJid(msg.user)
       if(msg.quoted.sender === sᴜʜᴀɪʟ_ᴍᴅ_num && msg.quoted.chat === 'status@broadcast' ){ return await forwardMessage(msg.chat, Suhail.bot, msg, 'send' ); }
   }
})//==================================================================