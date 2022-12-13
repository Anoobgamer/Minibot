module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {
        console.log(`Ready for stuff!!!! ${client.user.tag} is logged in and online.`);
    }
}