'use-strict'
/*
THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT OWNERS AND CONTRIBUTORS; 
THIS SOFTWARE SHOULDNT NOT BE TAMPERED IN ANY WAY OUT OF THE PERMISSION OF COPYRIGHT OWNERS;
    THIS SOFTWARE IS IN DEVELOPMENT, IT MAY NOT FUNCTION AS PROVIDED
*/
const {Client, Activity,MessageEmbed,GuildMember, ActivityFlags, ApplicationCommand, Application} = require('discord.js')

const Spark = class {
    tools = {
        Discord: {
            DiscordJS: require('discord.js'),
            Client: Client,
            Activity: Activity,
            ActivityFlags: ActivityFlags,
            MessageEmbed: MessageEmbed,
            GuildMember: GuildMember,
            Application: Application,
            ApplicationCommand: ApplicationCommand
        } 
    };

}
module.exports = {
    Spark
}