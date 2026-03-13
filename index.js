const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ 
    checkUpdate: false,
    patchVoice: true // ESTA LÍNEA ARREGLA EL ERROR DE TU FOTO
});
const http = require('http');

http.createServer((req, res) => res.end("Gior RPC Online")).listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`¡LOGUEADO CON ÉXITO EN ${client.user.tag}!`);
  
  const r = new (require('discord.js-selfbot-v13')).RichPresence(client)
    .setApplicationId('11482072730785419314')
    .setType('PLAYING')
    .setState('✅ Official Reseller')
    .setDetails('Best Prices')
    .addButton('SHOP LINK', 'https://giorshop.mysellauth.com/')
    .addButton('JOIN DISCORD', 'https://discord.gg/UzHePBPT29');

  client.user.setPresence({ activities: [r] });
});

client.login(process.env.TOKEN);
