const Sequelize = require('sequelize');
const database = require("../db/db");
const Video = database.define('video', {
  id_video:{
    type:Sequelize.INTEGER,
    autoIncrement:true,
    allownull:false,
    primaryKey:true
  },
  autor:{
    type:Sequelize.STRING,
    allownull:false,
  },
  titulo:{
   type:Sequelize.STRING,
    allownull:false,
  },
  assunto:{
    type:Sequelize.STRING,
    allownull:false,
  },
  descrição:{
    type:Sequelize.STRING,
    allownull:false,
  },
  link:{
    type:Sequelize.STRING,
    allownull:false
  }
  
}, {database, modelname:'video', tableName:'videos'});

module.exports = Video;