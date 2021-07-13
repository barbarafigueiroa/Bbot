const movies = require('./movies.json')
const movieController = require("./movieController")
const Discord = require('discord.js')


function receberMensagem(mensagem){  
    const { author, content, channel} = mensagem
    if(author.bot == false){
        const msg = new Discord.MessageEmbed()

        switch(content){
            case "/oi":
                msg.setDescription(`
                Olá ${author}, seja bem vindo ao tour Star Wars, 
                vou te ajudar a escolher a melhor sequência para assistir
                T O D O S  os filmes, e te dizer tudo que você precisar!
                quer saber mais? digita: /comandos`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
            break
            case "/comandos":
                msg.setDescription(`
                Digite /todos para receber a lista completa dos filmes,
                para ver só a Trilogia Clássica, digite: /classica,
                para a Trilogia Prequel, digite: /prequel,
                para ver os Spin-Offs, digite: /spinfoof,
                e para ver os filmes da Nova Trilogia, digite: /nova`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
            break
            case "/todos":
                console.log(channel)
                movieController.showMovie(channel, author, content)
            break
            case "/classicos":
                console.log(channel)
                movieController.showClassicTrilogy(channel, 1)
                
            break 
            case "/prequel":
                console.log(channel)
                movieController.showPrequelTrilogy(channel, 2)
            break
            case "/spinoff":
                console.log(channel)
                movieController.showSpinoff(channel, 3)    
            break
            case "/nova":
                console.log(channel)
                movieController.showNewTrilogy(channel, 4)  
            break      
            default:
                channel.send(`Desculpe, não entendi o seu comando!
                 Digite novamente /comandos e escolha a opção desejada!`)
            break
            
        }
    }
}       


module.exports = receberMensagem