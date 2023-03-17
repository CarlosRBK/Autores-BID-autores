const mongoose = require('mongoose');
const AutorSchema = new mongoose.Schema({
    name: { 
        type: String,
        minlength:[3, 'Se requieren minimo 3 carácteres'] 
    }
})
module.exports.Autor = mongoose.model('Autor', AutorSchema);

