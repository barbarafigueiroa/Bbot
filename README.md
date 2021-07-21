# Bbot - Discord

# Mentoria Iniciativa Padawan

Mentoria ministrada por Felipe Reinaux/ [GitHub](https://github.com/fereinaux) voltada para o uso da linguagem JavaScript fazendo uso de funções básicas, desenvolvendo códigos complexos e completos.

Na mentoria foi ensinado como utilizar a documentação do Discord.js para criar uma aplicação, Axios para consumir APIs


### Criando um bot do discord do Zero:

Nesse projeto foi criado um **bot** do discord, que lista os filmes da franquia de Star Wars utilizando métodos de pradronização/estilo de funções prórpias do Js.
O projeto foi hospedado no [Heroku](https://dashboard.heroku.com/apps) para funcionar constantemente.


No bot tem algumas **funções**, são elas:

- mostra a lista de filmes completa;
- mostra os filmes de acordo com sua Trilogia: clássica, Prequel, Spin-off e Nova Trilogia;
- exibe uma mensagem de boas vindas, de comando não válido e uma lista com todos os comandos que o usuário pode digitar para ter acesso as informações;
- Exibe uma lista de Personagens, Planetas, Espécies, Naves, Veículos e os próprios filmes, através do consumo de uma [API de Star Wars](https://swapi.dev/)


### Como você pode utilizar o bot:

- Fazer o clone do repositório
[clica aqui pra clonar](https://github.com/barbarafigueiroa/Bbot/tree/B%C3%A1rbara)

- Abrir o repositório no seu editor de código de preferência (utilizei o VSCode)

- Instalar os pacotes node: **npm install**

- No prórpio Discord, crie um novo servidor para rodar o bot, fica no botão de + do lado esquerdo da tela

- [Clica aqui](https://discord.com/developers/applications/) para criar uma nova aplicação o teu bot no caso e configurar ele(nome, descrição, avatar)

- Você vai precisar deixar o bot nas configurações de adm para executar algumas funções

- Nas informações gerais do seu bot, copie o **APLLICATION ID** 

- Nesse link você só precisa substituir SEU ID, pelo número copiado
https://discord.com/oauth2/authorize?client_id=SEUID&permissions=8&scope=bot

- Você vai selecionar o servidor que criou, continuar e marcar a opção adm e autorizar

- Depois disso seu bot já estará no servidor que você criou

- Para que o bot funcione ele precisa de uma chave, que é o [TOKEN](https://discord.com/developers/applications/864673532839591946/bot) ao lado do avatar você tem a opção de copiar o TOKEN

- Depois de copiado, vá ao arquivo .env do repositório e substitua **CHAVE_DE_ACESSO** pelo seu **TOKEN** copiado.

- PRONTO! agora com tudo configurado, dependencias, servidor criado, aplicação(bot) criada, permissões de administrador ok, tudo pronto para usar o Bbot!

- Só digitar **node app.js** e saber tudo sobre Star Wars!
 






