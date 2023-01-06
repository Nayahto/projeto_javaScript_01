# projeto_javaScript_01

dependencies
body-parser ^1.20.1
cors ^2.8.5
dotenv ^16.0.3
express ^4.18.2
mongoose ^6.8.1
prettier ^2.8.1

devDependencies
nodemon ^2.0.20

Body-Parser
Body-parser é o middleware de análise de corpo do Node.js. Ele é responsável por analisar os corpos de solicitação recebidos em um middleware antes de você manipulá-los.
fonte: https://www.geeksforgeeks.org/

CORS
CORS significa Cross-Origin Resource Sharing, um sistema ou estrutura de software que permite que recursos limitados em uma página da Web de outros domínios sejam solicitados como se estivessem no mesmo servidor de domínio.
fonte: https://www.secjuice.com/

DotEnv
Dotenv é um módulo de dependência zero que carrega variáveis de ambiente de um arquivo .env para process.env. O armazenamento da configuração no ambiente separado do código é baseado na metodologia The Twelve-Factor App.
fonte:https://www.npmjs.com/

Express
Express é um framework para aplicativo da web do Node.js mínimo e flexível que fornece um conjunto robusto de recursos para aplicativos web e móvel.
fonte:https://expressjs.com/

Mongoose
Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
fonte:https://www.npmjs.com/

Prettier
Prettier é um formatador de código para JavaScript e outras linguagens populares. O Prettier impõe um formato consistente analisando o código e reimprimindo-o com suas próprias regras que levam em conta o comprimento máximo da linha, agrupando o código quando necessário.
fonte: https://blog.logrocket.com/

Nodemon
O módulo nodemon é um módulo que desenvolve aplicativos baseados em node.js reiniciando automaticamente o aplicativo do nó quando são detectadas alterações de arquivo no diretório. O Nodemon não requer nenhuma alteração no código original e no método de desenvolvimento.
fonte: https://www.geeksforgeeks.org/

API javascript com banco de dados mongoDb

testador de rotas utilizado: thunderClient

thunderclient é uma extensao do visual studio code que serve como alternativa para o postman ou outra ferramenta de testes de rotas

rotas presentes na API para futuros testes

'/'
'/todos'
'/todos/:id'
'/criar'
'/editar/:id'
'/apagar/:id'

modo de uso: é possivel utilizar a api de forma local clonando o repositorio para a sua maquina depois fazendo a instalacao de todas as dependencias com o comando $ npm init, logo depois que todas as dependencias estiverem instaladas voce pode usar o comando $ npm run dev para inicializar o projeto com o nodemon
