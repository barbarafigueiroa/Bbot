const movies = require('./movies.json')
const movieController = require("./movieController")
const apiStarWars = require("./api/StarWarsApi")
const Discord = require('discord.js')


const receberMensagem = async (mensagem) => {  
    const { author, content, channel} = mensagem
    if(author.bot == false){
        const msg = new Discord.MessageEmbed()

        switch(content){
            case "/oi":
                msg.setDescription(`
                Oi ${author}, Quer saber a melhor sequencia para assistir a todos os filmes da franquia Star Wars?
                É só digitar: /comandos e escolher o que precisa saber!`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
            break
            case "/comandos":
                msg.setDescription(`
                Digite /todos para receber a lista completa dos filmes,
                para ver só a Trilogia Clássica, digite: /classica,
                para a Trilogia Prequel, digite: /prequel,
                para ver os Spin-Offs, digite: /spinoof,
                e para ver os filmes da Nova Trilogia, digite: /nova`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
            break
            case "/todos":
                movieController.showAllMovies(channel)
            break
            case "/classica":
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
            case "/personagens":
                await apiStarWars.getPersonagem(channel)
            case "planetas":
                await apiStarWars.getPlanets(channel)    
            default:
                msg.setDescription(`Desculpe, não entendi o seu comando!
                Digite novamente /comandos e escolha a opção desejada!`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
            break
            
        }
    }
}       


module.exports = receberMensagem