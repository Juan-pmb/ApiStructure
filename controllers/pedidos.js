const  {response} =require('express');


Pedidos = require('../models/pedidos');

const getPedidos = async(req, res) =>{


    const pedidos = await Pedidos.find();//obteniendo los datos de la coleccion
     res.json({
        msg: pedidos
     })

}

const postPedidos = async(req, res) => {
    const datos= req.body //capturar datos de la url de postman
    let mensaje='Insercion exitosa'
    try{
        const pedidos = new Pedidos(datos)//instaciar el objeto
        await pedidos.save()//guardar la base de datos
        console.log(pedidos)

    }catch(error){

        mensaje=error
        console.log(error)

    }
  
    res.json({
        msg: mensaje
    })
}


const putPedidos = async(req, res) =>{
    const {numPedido,nombreCliente,fechaPedido,totalPago,estado,formaPago, precioDolar}=req.body //desestructurar

try{
        const pedidos = await Pedidos.findOneAndUpdate({numPedido:numPedido},{nombreCliente:nombreCliente,fechaPedido:fechaPedido,totalPago:totalPago,estado:estado,formaPago:formaPago, precioDolar:precioDolar})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
       
        mensaje = 'actualizacion exitosa'
        
    }catch(error){
        mensaje=error
     }
     res.json({
        msg: mensaje
     })
     
}
   const deletePedidos= async(req, res) =>{


    try{
            const {numPedido}=req.query //desestructurar
            console.log('entró al try')
            console.log(numPedido)
    
            const pedidos = await Pedidos.findOneAndDelete({numPedido:numPedido})//las primeras llaves son el valor por el cual voy a hacer la modificacion el segundo hace referencia a lo que el usuario envio
            mensaje = 'Eliminacion Exitosa'
        console.log('Pasó'+pedidos)
            
        }catch(error){
            mensaje=error
        console.log('Falló')
         }
         res.json({
            msg: mensaje
         })
         
    }
module.exports={
    getPedidos,
    postPedidos,
    putPedidos,
    deletePedidos
}
