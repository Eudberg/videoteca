const Sequelize = require('sequelize')
const sequelize = new Sequelize({
  dialect:'sqlite',
  storage:'./videoteca.sqlite'
})
try{
  sequelize.authenticate();
  console.log("Sucesso na criação do banco")
}
catch(erro){
  console.log("Erro na conecxão", erro);
}

module.exports=sequelize