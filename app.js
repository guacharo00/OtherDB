// Requires
var express = require('express');
var mongoose = require('mongoose');





// Startin variables
var app = express();



// Conecciones
mongoose.connect('mongodb://localhost/shopDB', { useNewUrlParser: true }, ( err, res )=>{

    if (err) throw err;

    console.log( 'ShopDb: \x1b[32m%s\x1b[0m',' online' )

})



// Rutas
app.get('/', (req, res, next)=>{
    res.status(200).json({
        ok: true,
        message: 'Peticion realizad correctamente'
    })
})



//Escuchar peticiones
app.listen(3000, ( req, res )=>{
    console.log( 'Expres server puerto 3000: \x1b[32m%s\x1b[0m',' online' );
})

