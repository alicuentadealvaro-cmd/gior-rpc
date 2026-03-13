const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ 
    checkUpdate: false, 
    patchVoice: true 
});
const http = require('http');

// Servidor básico para Render
http.createServer((req, res) => {
    res.write("RPC Gior Funcionando");
    res.end();
}).listen(process.env.PORT || 3000);

client.on('ready', async () => {
  console.log(`¡LOGUEADO CON ÉXITO EN ${client.user.tag}!`);
  
  const r = new (require('discord.js-selfbot-v13')).RichPresence(client)
    .setApplicationId('1482072730785419314') // Tu ID corregido
    .setType('PLAYING')
    .setState('✅ Official Reseller')
    .setDetails('Best Prices')
    .addButton('SHOP LINK', 'https://giorstore.xyz')
    .addButton('JOIN DISCORD', 'https://discord.gg/TU_LINK');

  client.user.setPresence({ activities: [r] });
});

client.login(process.env.TOKEN);
