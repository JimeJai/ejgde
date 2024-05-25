const net = require("net")
const funciones = require("./books.js")
const port = 3000
const server = net.createServer()
const views = require("./views/index.js")

server.on("connection", (socket) => {

socket.write(JSON.stringify("Bienvenido a mi servidor"))

socket.on("data", (mensajeCliente) => {
   //console.log(mensajeCliente);
   // const mensajeTexto = mensajeCliente.toString();
   const mensajeTexto = JSON.parse(mensajeCliente)
   //console.log(mensajeTexto);
   const info = views.proArg(mensajeTexto)
   //console.log(info);
   const infoJSON = JSON.stringify(info)
   
   socket.write(infoJSON)
})
})

server.listen(port, () => {
    console.log("servidor escuchando en puerto " + port);
})



