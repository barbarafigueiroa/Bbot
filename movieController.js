const movies = require('./movies.json')
const Discord = require('discord.js')
const variablesColor = require("./variablesColor.json")

/**
 * Filtra um Filme(objeto) do array variablesColor de acordo com o Id
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
const getColorById = (id) => variablesColor.find(variablesColor => variablesColor.id == id)

/**
 * Mostra um filme estruturado com os métodos do Discord.messageEmbed
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {object} movie - Objeto do array movies.json
 */
const showMovie = (channel, movie) => {
    
    const msg = new Discord.MessageEmbed()
    const idColor = getColorById(movie.id)

        msg.setTitle(movie.name)
        msg.setURL(movie.trailer)
        msg.setDescription(movie.synopsis)
        msg.setColor(idColor.color)
        msg.setThumbnail(movie.assets)
        msg.setImage(movie.image)
        msg.setFooter(`
        Ano de Lançamento: ${movie.year}
        Clique no Título e assista ao Trailler`)

        channel.send(msg)

}
/**
 * Filtra um Filme(objeto) do array movies de acordo com o Id, cria um novo array apenas com o id chamado para exbiri filmes específicos
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
 function filterAndMapById(channel, id){
     let moviesFiltered = movies.filter(movie => movie.id == id)
     moviesFiltered.map(movie => showMovie(channel, movie))   
}

/**
 * Exibe todos os filmes utilizando a estrutura da função showMovie
 * @param {Discord.channel} channel - Canal da mensagem
 */
function showAllMovies(channel){
    movies.map(movie => showMovie(channel, movie))  
}
/**
 * Exibe apenas os filmes da trilogia Clássica
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
function showClassicTrilogy(channel, id) {
    filterAndMapById(channel, id)
}

/**
 *  Exibe apenas os filmes da trilogia Prequel
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
function showPrequelTrilogy(channel, id) {
    filterAndMapById(channel, id)
}

/**
 *  Exibe apenas os filmes Spinf- Off
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
function showSpinoff(channel, id) {
    filterAndMapById(channel, id)
}

/**
 *  Exibe apenas os filmes da Nova Trilogia
 * @param {Discord.channel} channel - Canal da mensagem
 * @param {integer} id - Identificador de id do filme para questões de filtro..
 */
function showNewTrilogy(channel, id) {
    filterAndMapById(channel, id)
}



module.exports = {
    showMovie,
    showAllMovies,
    filterAndMapById,
    showClassicTrilogy,
    showPrequelTrilogy,
    showSpinoff,
    showNewTrilogy
}