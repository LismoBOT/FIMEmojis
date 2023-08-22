import { Client, GatewayIntentBits, TextChannel, EmbedBuilder, Message } from "discord.js";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages
    ]
});

client.on("ready", () => {
    console.log("Bot is ready");

    const cookiejar = client.guilds.cache.get("1119080815775715389")!;

    for (const emoji of cookiejar.emojis.cache.values()) {
        console.log(`<:${emoji.name}:${emoji.id}>`);
    }
});

client.login("TOKEN WOULD BE HERE");
