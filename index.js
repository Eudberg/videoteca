const database =require("./db/db");
const express=require("express")
const app = express()
const porta = 443
const Video = require("./models/Video")
const VideoRoutes = require("./routes/routesVideo")
const ControllerVideo = require("./controllers/ControllerVideo");
const hand = require("express-handlebars")

app.engine("handlebars", hand.engine())
app.set("view engine", "handlebars")
app.use(express.urlencoded({extended:true,}))

app.use(express.json());
app.use(express.static("public"))

app.use("/", VideoRoutes)

try{
  database.sync().then(()=>{
    app.listen(443,()=>{
      console.log("Servidor OK!")
    })
  })
}
catch(erro){
  console.log("Erro na sincronia com o banco de dados.",erro);
}
