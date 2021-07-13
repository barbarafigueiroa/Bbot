const movies = require('./movies.json')
const Discord = require('discord.js')
const variablesColor = require("./variablesColor.json")

const getColorById = (id) => variablesColor.find(variablesColor => variablesColor.id == id)

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
        `)

        channel.send(msg)

}
/**
 *  Filtra um Filme(objeto) do array movies de acordo com o Id.
 * @param {integer} id - Identificador da Secao do filme para questões de filtro..
 */
 function filterAndMapById(channel, id){
     let moviesFiltered = movies.filter(movie => movie.id == id)
     moviesFiltered.map(movie => showMovie(channel, movie))   
}

/**
 * Os movies(objeto) do array movies que forem classicTrilogyId serão filtrados e impressos no console.
 */
function showClassicTrilogy(channel, id) {
    filterAndMapById(channel, id)
}

/**
 * Mostra os movies(objeto) do array movies de acordo com o Id, todos que forem prequelTrilogyId serão filtrados e impressos no console.
 */
function showPrequelTrilogy(channel, id) {
    filterAndMapById(channel, id)
}

/**
  * Mostra os movies(objeto) do array movies de acordo com o Id, todos que forem SpinoffId serão filtrados e impressos no console.
 */
function showSpinoff(channel, id) {
    filterAndMapById(channel, id)
}

/**
 *  * Mostra os movies(objeto) do array movies de acordo com o Id, todos que forem newTrilogyId serão filtrados e impressos no console.
 */
function showNewTrilogy(channel, id) {
    filterAndMapById(channel, id)
}



module.exports = {
    showMovie,
    filterAndMapById,
    showClassicTrilogy,
    showPrequelTrilogy,
    showSpinoff,
    showNewTrilogy
}