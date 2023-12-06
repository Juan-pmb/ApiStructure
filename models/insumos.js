const{Shema, model}= require('mongoose')

const InsumoShema=({
 
    id:{
        type:Number,
        required:true
    },
 
    nombreInsumo: {
        type: String,
        required: true,
        
    },

    medidaInsumo: {
        type: Number,
        required: true,
    },

    cantidad: {
        type: Number,
        required: true,
    },

    valorInsumo: {
        type: Number,
        required: true,
    },
   
    categoriaInsumo: {
        type: String,
        required: true,
    },

    stockMaximo: {
        type: Number,
        required: true,

    },

    stockMinimo: {
        type: Number,
        required: true,

    },
    
    stockInsumo:{
        type:Number,
        required:false
    },

    estado: {
        type: String,
        default: 'activo', // Puedes establecer un valor predeterminado si lo deseas
    },
    
    iva: {
        type: Number,
        required: true
    }
})
//especificando la estructura que va  a tener la conexión
module.exports = model('Insumos', InsumoShema)

