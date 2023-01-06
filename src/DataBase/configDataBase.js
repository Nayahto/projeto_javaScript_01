//#importe do pacote mongoose responsavel pelo mapeamento dos campos no banco de dados
const mongoose = require('mongoose');

/*conexao com o banco de dados incluindo a string de conexao e algumas opcoes extras como:
 useNewUrlPaser e
 useUnifiedTopology
*/
const dataBaseConection = () => {
  mongoose
    .connect(process.env.MONGOCONN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    /* como a conexao com obanco de dados acontece de forma assincrona é necessario algumas promisses,
     exemplo: then para executar algo após ter sido bem sucedida e catch para capturar algum erro */
    .then(() => console.log('mongo conectado!!'))
    .catch((err) => {
      console.log(`erro encontrado: ${err}`);
    });
};
//exportacao de toda a funcao para que ela possa ser usada em outro lugar//
module.exports = dataBaseConection;
