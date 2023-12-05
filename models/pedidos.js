const{Shema, model}= require('mongoose')

const PedidoShema=({
 
   numPedido:{
        type:Number,
        required:true
    },
    nombreCliente: {
        type: String,
        required: true,
    },
    direccionEnvio: {
        type: String,
        required: true,   
    },
    totalPago: {
        type: Number,
        required: true,
    },
    estado: {
        type: String,
        default: 'pendiente', // Puedes establecer un valor predeterminado si lo deseas
    },
    formaPago:{
        type: String,
        default: 'bancolombia', // Puedes establecer un valor predeterminado si lo deseas
    }

})
//especificando la estructura que va  a tener la conexión
module.exports = model('Pedidos', PedidoShema)

