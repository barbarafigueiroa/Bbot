let routemovies = require('./movies')
const Discord = require('discord.js')

function receberMensagem(mensagem){  
    const { author, content, channel} = mensagem
    if(author.bot == false){
        if(content == "!oi" || content == "!ola"){
            const msg = new Discord.MessageEmbed()
            msg.setDescription(`
            E ai  ${author}, gerando na alta?
            é noix, cpç! queres ver uma sequência boa pra assistir Star Wars?
            se tu quiser, digita sim ai!`)
            channel.send(msg)
        }
        else if(content.toLowerCase() == "sim"){
            routemovies.map(function (filme) {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(filme.name)
                msg.setDescription(filme.section)
                msg.setColor("#eaf5a6")
                msg.setThumbnail(filme.image)
                msg.setImage(filme.image)

                channel.send(msg)
            })
        }else
        channel.send("Entendi não bença!")
    }
}


module.exports = receberMensagem