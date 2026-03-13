const { Client } = require('discord.js-selfbot-v13');
const client = new Client({ 
    checkUpdate: false,
    patchVoice: true,
    allowedMentions: { parse: [] }
});
const http = require('http');

// Esto mantiene a Render vivo
http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Gior RPC is Running");
}).listen(process.env.PORT || 3000);

client.on('ready', async () => {
    console.log(`>>> CONECTADO CON ÉXITO EN: ${client.user.tag}`);
    
    const r = new (require('discord.js-selfbot-v13')).RichPresence(client)
        .setApplicationId('1482072730785419314')
        .setType('PLAYING')
        .setName('Gior Shop')
        .setDetails('Best Prices')
        .setState('✅ Official Reseller')
        .addButton('SHOP LINK', 'https://giorstore.xyz')
        .addButton('JOIN DISCORD', 'https://discord.gg/TU_LINK');

    client.user.setPresence({ activities: [r] });
});

client.login(process.env.TOKEN).catch(err => console.error("Fallo al entrar:", err));
