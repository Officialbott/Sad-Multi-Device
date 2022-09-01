let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(nomorown + '@s.whatsapp.net', 'image').catch(_ => hwaifu[1]) 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : Zaky
*✉️ Nama RL* : Ikiy
*♂️ Gender* : Laki - laki
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 28 Feb 2007
*🎨 Umur* : 16
*🧮 Kelas* : 9
*🧩 Hobby* : Nonton Hanime, Chatting, Recode script bot
*💬 Sifat* : Idiot, Tidak Ramah, Kanjut, Prik, Pedofil
*🗺️ Tinggal* : Indo, Riau, Pekanbaru, Kota tengah 
*❤️ Suka* : warnah kuning & biru, Hanime, waifu, loli, trap, furry, kucing, hentai
*💔 Benci* : autis, anak ngep², seleb

*───────[ SOSIAL MEDIA ]───────*
*📷 instagran* : @Zaky_bot
*🇫  Facebook* : Zaky Gans
*🐈 Github:* Private 

`
conn.sendHydrated(m.chat, teksbio, wm, ppown, "wa.me/" + nomorown, "💬 ᴄʜᴀᴛs", null,null, [["ᴅᴏɴᴀsɪ", '.donasi'], [null, null],[null,null]], m)
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler
