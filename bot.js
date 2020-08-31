const {client, Client} = require("discord.js")
const client = new Client
global.config = require("./config.json")
const { updatePlayerCount } = require("./utils/")
client.on("ready", () => {
    console.log('Discord Bot logged in as $(client.user.tag)')
    updatePlayerCount(client, 5)
})

client.login(config.token)