const express = require('express')
const cors =require('cors');//implementar seguridad
const bodyParser = require('body-parser')// paquete convertir objeto enviado desde el formulario
const { dbConection } = require('../database/config')



//crear array

class Server{

    constructor(){
        this.app = express()
        this.port= process.env.PORT
        this.insumosPath ='/insumos'//Ruta de la api
        this.pedidosPath ='/pedidos'//Ruta de la api
        this.middelwares()
        this.routes()
        this.conectarDB()
       
    }
listen(){
   this.app.listen(
    this.port, () =>{
     console.log('escuchando por el puerto '+this.port)


    }
   )
}

routes(){
    this.app.use(this.insumosPath, require('../routes/insumos'))
    this.app.use(this.pedidosPath, require('../routes/pedidos'))
   }

   middelwares(){//es un puente entre el fronend y backend
    this.app.use( cors());
    this.app.use( bodyParser.json())//parsiar objetos a nsertar en la db
   }


   async conectarDB(){
     await dbConection()


   }
}


module.exports ={Server}//exportacion de la clase.

//http://github
//crear el metodo get y post para una coleccion de su proyecto
//emplear un array de objetos para alamcednar la informacion