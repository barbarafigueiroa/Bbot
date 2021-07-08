let routemovies = require('./movies')
const Discord = require('discord.js')


function receberMensagem(mensagem){

    if(mensagem.content == "!qualquercoisa"){
        mensagem.channel.send
    }
    
    if(mensagem.author.bot == false){
        if(mensagem.content == "!oi" || mensagem.content == "!ola"){
            mensagem.channel.send(`
            E ai  ${mensagem.author.username}, gerando na alta?
            é noix, cpç! queres ver uma sequência boa pra assistir Star Wars?
            se tu quiser, digita sim ai!`)
        }
        else if(mensagem.content.toLowerCase() == "sim"){
            routemovies.map(function (filme) {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(filme.name)
                msg.setDescription(filme.section)
                msg.setColor("#eaf5a6")
                msg.setThumbnail(filme.image)
                msg.setImage(filme.image)

                mensagem.channel.send(msg)
            })
        }else
        mensagem.channel.send("Entendi não bença!")
    }
}


module.exports = receberMensagem