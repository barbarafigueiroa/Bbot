
const Discord = require('discord.js')
const bot = new Discord.Client()



bot.on("message", receberMensagem)

function receberMensagem (mensagem){

    const filmes = [
        {
            "name": "Uma Nova Esperança",
            "age": 1977,
            "order": 1,
            "section": "Trilogia Clássica",
            "id": 1,
            "image": "https://bit.ly/2TIetq4"
        },
        {
            "name": "O Império Contra Ataca",
            "age": 1980,
            "order": 2,
            "section": "Trilogia Clássica",
            "id": 1,
            "image": "https://bit.ly/2TIetq4"
        },
        {
            "name": "O retorno Jedi",
            "age": 1982,
            "order": 3,
            "section": "Trilogia Clássica",
            "id": 1,
            "image": "https://bit.ly/3cNern8"
        },
        {
            "name": "A Ameaça Fantasma",
            "age": 1993,
            "order": 4,
            "section": "Trilogia Prequel",
            "id": 2,
            "image": "https://bit.ly/3xsioFX"
        },
        {
            "name": "Ataque dos Clones",
            "age": 2002,
            "order": 5,
            "section": "Trilogia Prequel",
            "id": 2,
            "image": "https://bit.ly/3vur0ud"
        },
        {
            "name": "A Vingança dos Sith",
            "age": 2005,
            "order": 6,
            "section": "Trilogia Prequel",
            "id": 2,
            "image": "https://bit.ly/35qWXZJ"
        },
        {
            "name": "Rogue One",
            "age": 2016,
            "order": 7,
            "section": "Spin - Off",
            "id": 3,
            "image": "https://bit.ly/3guHP44"
        },
        {
            "name": "Han Solo",
            "age": 2018,
            "order": 8,
            "section": "Spin - Off",
            "id": 3,
            "image": "https://bit.ly/3iOIa34"
        },
        {
            "name": "O Despertar da Força",
            "age": 2015,
            "order": 9,
            "section": "Nova Trilogia",
            "id": 4,
            "image": "https://bit.ly/3zsIzOJ"
        },
        {
            "name": "Os Últimos Jedi",
            "age": 2017,
            "order": 10,
            "section": "Nova Trilogia",
            "id": 4,
            "image": "https://bit.ly/3xvaPhw"
        },
        {
            "name": "A Ascenção de Skywalker",
            "age": 2019,
            "order": 11,
            "section": "Nova Trilogia",
            "id": 4,
            "image": "https://bit.ly/3vx59lS"
        }
    ]

    if(mensagem.author.bot == false){
        if(mensagem.content.toLowerCase() == "!starwars"){
            filmes.map(function (filme) {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(filme.name)
                msg.setDescription(filme.section)
                msg.setColor("#1474db")
                msg.setThumbnail(filme.image)
                msg.setImage(filme.image)

                mensagem.channel.send(msg)
            })
        }
        else
        mensagem.channel.send("Resposta automática")

    }
    

}
bot.login('ODYyMTEyOTM0NDI4MDE2NjYw.YOTnPA.q7CJdX5gqYib7l4iWe2WmJKvwZA');

