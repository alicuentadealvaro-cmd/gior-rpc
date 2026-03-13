const RPC = require('discord-rpc');
const client = new RPC.Client({ transport: 'ipc' });
const http = require('http');

http.createServer((req, res) => res.end("Gior Store RPC Online")).listen(process.env.PORT || 3000);

client.on('ready', () => {
    console.log('RPC ONLINE');
    client.setActivity({
        details: "Best Prices",
        state: "✅ Official Reseller",
        buttons: [
            { label: "SHOP LINK", url: "https://giorstore.xyz" },
            { label: "JOIN DISCORD", url: "https://discord.gg/TU_LINK" }
        ]
    });
});

client.login({ clientId: "11482072730785419314" }).catch(console.error);
