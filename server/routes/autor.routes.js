const AutorController = require('../controllers/autor.controller');
module.exports = function(app){
    app.get('/api', AutorController.index);
    app.post('/api/autor', AutorController.createAutor);
    app.get('/api/autors',AutorController.getAllAutors);
    app.get('/api/autor/:id',AutorController.getAutor)
    app.put('/api/autor/:id',AutorController.updateAutor);
    app.delete('/api/autor/:id',AutorController.deleteAutor);
}
