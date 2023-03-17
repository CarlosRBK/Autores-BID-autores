const { Autor } = require("../models/autor.model");

module.exports.index = (request, response) => {
    response.json({
       message: "Welcome to the animal shelter!"
    });
}

module.exports.createAutor = async (request, response) => {
    try {
        const { name } = request.body;
        autor = await Autor.create({
            name
        });
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAllAutors = async (request, response) => {
    try {
        const autors = await Autor.find({})
        response.json(autors);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.getAutor = async (request, response) => {
    try {
        const pet = await Autor.findOne({_id:request.params.id})
        response.json(pet);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}


module.exports.updateAutor = async (request, response) => {
    try {
        const autor = await Autor.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}

module.exports.deleteAutor = async (request, response) => {
    try {
        const autor = await Autor.deleteOne({ _id: request.params.id })
        response.json(autor);
    } catch (error) {
        response.status(400);
        response.json(error);
    }
}