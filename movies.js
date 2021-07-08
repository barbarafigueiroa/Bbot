
let movies = []

/**
 * Adciona um Filme ao meu array.
 * @param {string} name - Nome do filme.
 * @param {integer} year - Ano em que o filme foi lançado.
 * @param {integer} order - Ordem para assistir a saga.
 * @param {string} section - Em que trilogia o filme se enquadra.
 * @param {integer} id - Identificador da Secao do filme para questões de filtro.
 * @param {string} image - Endereço URL com o poster do Filme.
 */
function addMovie(name, year, order, section, id, image){
    movies.push({name, year, order, section, id, image}) 
}

addMovie("Uma Nova Esperança",1977,1, "Trilogia Clássica", 1,"https://bit.ly/2TIetq4"),
addMovie("O Império Contra Ataca",1980,2,"Trilogia Clássica",1,"https://bit.ly/3gtXArQ"),
addMovie("O retorno Jedi",1982,3,"Trilogia Clássica", 1,"https://bit.ly/3cNern8")   
addMovie("A Ameaça Fantasma", 1993, 4, "Trilogia Prequel", 2, "https://bit.ly/3xsioFX")
addMovie("Ataque dos Clones", 2002, 5, "Trilogia Prequel", 2, "https://bit.ly/3vur0ud")
addMovie("A Vingança dos Sith", 2005, 6, "Trilogia Prequel", 2, "https://bit.ly/35qWXZJ")
addMovie("Rogue One", 2016, 7, "Spin- Off", 3, "https://bit.ly/3guHP44")
addMovie("Han Solo", 2018, 8, "Spin- Off", 3, "https://bit.ly/3iOIa34")
addMovie("O Despertar da Força", 2015, 9, "Nova Trilogia", 4, "https://bit.ly/3zsIzOJ")
addMovie("Os Últimos Jedi", 2017, 10, "Nova Trilogia", 4, "https://bit.ly/3xvaPhw")
addMovie("A Ascenção de Skywalker", 2019, 11, "Nova Trilogia", 4, "https://bit.ly/3vx59lS")

module.exports = movies