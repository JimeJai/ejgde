const net = require ("net")

const port = 3000
const client = new net.createConnection({ port: 3000 })
const book = {
    
    "name": "prueba de funcion create",
    "author": "dankan",
    "sold": 15
    
}

client.on("connect", () => {
    //const data = { action: "create", body: book }//FUNCIONA
    //const data = { action: "modify", body: { id: "12", name: "nuevo" } }//funciona
    //const data = { action: "delete", body: { id: 12 } }//funciona
    const data = { action: "read" }//funciona
    //const data = { action: "readOne", body: { id: 11 } }//funciona 
    //const data = { action: "author", body: {author: "George Orwell"} }//funciona
    //const data = { action: "name", body: {name: "El Señor de los Anillos"} }//funciona
    const messegeJSON = JSON.stringify(data)
    client.write(messegeJSON);
})

client.on("data", (mensajeDelServer) => {
     const mensajeDelServerJS = JSON.parse(mensajeDelServer)
     console.log("server dice " , mensajeDelServerJS);
})