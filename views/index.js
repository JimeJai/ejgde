const funciones = require("../controllers/book-controller.js")

function proArg(mensajeTexto) {
    switch (mensajeTexto.action) {

        case "readOne":

            return funciones.giveXId(mensajeTexto.body.id)
            break;
        case "read"://getAll
            return funciones.giveAll(mensajeTexto.action)
            break;
        case "modify":
            return funciones.giveModify(mensajeTexto.body)
            break;
        case "create"://addBook
            return funciones.giveAdd(mensajeTexto.body)
            break;
        case "delete"://
            return funciones.giveDelete(mensajeTexto.body.id)
            break;
        case "name":
            return funciones.giveXName(mensajeTexto.body.name)
            break;
        case "author":
            return funciones.giveXAuthor(mensajeTexto.body.author)
            break;
        default:
            return "Accion inexistente";
            break;
    }
}


module.exports = { proArg: proArg } 