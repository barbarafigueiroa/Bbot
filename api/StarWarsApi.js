//Nesse arquivo eu pego propriedades do axios e do discord para usar o MessageEmbed()
//criei uma const pra usar a base de uma api de starwars

const axios = require("axios")
const baseUrl = "https://swapi.dev/api/"
const { MessageEmbed } = require("discord.js")

const getApiSW = async (channel, endpoint, title) => {
    const resposta = await axios.get(`${baseUrl}${endpoint}`)
    const {data} = resposta
    channel.send(new MessageEmbed()
    .setColor("#2abfba")
    .setTitle(`${title}`)
    .setDescription(`
    Total de ${title}: ${data.count}
    ${title}:
    ${data.results.map(result => `- ${result.name || result.title}
    `).join(" ")}
    `))  
}

const getPeople = async (channel) => await getApiSW(channel, "people", "Personagens")
const getPlanets = async (channel) => await getApiSW(channel,"planets", "Planetas")
const getStarShips = async (channel) => await getApiSW(channel, "starships", "Naves")
const getFilms = async (channel) => await getApiSW(channel, "films", "Filmes")
const getVehicles = async (channel) => await getApiSW(channel, "vehicles", "Veículos")
const getSpecies = async (channel) => await getApiSW(channel, "species", "Espécies")


module.exports = {
    getPeople, 
    getPlanets,
    getStarShips,
    getFilms,
    getVehicles,
    getSpecies

}