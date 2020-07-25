// con la librería http
/* const http = require('http');

http.createServer((req,res) => {
    res.write('Hola Mundo');
    res.end();
}).listen(8080); */

// con express
/* const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000); */

//


const express = require("express");
const app = express();

app.use(
  express.static(
     __dirname  + "/public"
  )
);
 
// express hbs engine
app.set("view engine", "hbs");

app.listen(3000, () => {
    console.log(__dirname + "/public");
    
  console.log("Escuchando peticiones en el puerto 3000");
});