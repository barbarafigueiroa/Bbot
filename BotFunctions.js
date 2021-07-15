const movieController = require("./movieController")
const apiStarWars = require("./api/StarWarsApi")
const Discord = require('discord.js')


const receberMensagem = async (mensagem) => {
    const { author, content, channel } = mensagem
    if (author.bot == false) {
        const msg = new Discord.MessageEmbed()

        switch (content) {
            case "!oi":
                msg.setDescription(`
                Oi ${author}, como vai?
                Aqui tenho todas as informações que tu precisa para saber sobre 
                **S T A R   W A R S** 
                digita **!comandos** pra saber tudo o que tu pode ter acesso!`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
                break
            case "!comandos":
                msg.setDescription(`
                Para ver **TODOS** os filmes, digite **!todos**
                -------------------------------------------------------
                Para ver só a **TRILOGIA CLÁSSICA**, digite: **!classica**
                -------------------------------------------------------
                Para ver só a **TRILOGIA PREQUEL**, digite: **!prequel**
                -------------------------------------------------------
                Para ver só os **SPIN-OFFS**, digite: **!spinoff**
                -------------------------------------------------------
                Para ver só os filmes da **NOVA TRILOGIA**, digite: **!nova**
                -------------------------------------------------------
                Para ver a lista de **PERSONAGENS** digite: **!personagens**
                --------------------------------------------------------
                Para ver só a lista de **PLANETAS**, digite: **!planetas**
                --------------------------------------------------------
                Para ver só a lista de **NAVES**, digite: **!naves**
                --------------------------------------------------------
                Para ver só a lista de **ESPÉCIES**, digite: **!especies**
                --------------------------------------------------------
                Para ver só a lista de **FILMES**, digite: **!filmes**
                --------------------------------------------------------
                Para ver só a lista de **VEÍCULOS**, digite: **!veiculos**
                `)
                msg.setColor('#f7d2ec')
                channel.send(msg)
                break
            case "!todos":
                movieController.showAllMovies(channel)
                break
            case "!classica":
                console.log(channel)
                movieController.filterAndMapById(channel, 1)
                break
            case "!prequel":
                console.log(channel)
                movieController.filterAndMapById(channel, 2)
                break
            case "!spinoff":
                console.log(channel)
                movieController.filterAndMapById(channel, 3)
                break
            case "!nova":
                console.log(channel)
                movieController.filterAndMapById(channel, 4)
                break
            case "!personagens":
                await apiStarWars.getPeople(channel)
                break
            case "!planetas":
                await apiStarWars.getPlanets(channel)
                break
            case "!naves":
                await apiStarWars.getStarShips(channel)
                break 
            case "!filmes":
                await apiStarWars.getFilms(channel)
                break 
            case "!veiculos":
                await apiStarWars.getVehicles(channel)
                break 
            case "!especies":
                await apiStarWars.getSpecies(channel)
                break         
            default:
                msg.setDescription(`**Desculpe**, não entendi o seu comando!
                Digite novamente **!comandos** e escolha a opção desejada!`)
                msg.setColor('#f7d2ec')
                channel.send(msg)
                break

        }
    }
}


module.exports = receberMensagem