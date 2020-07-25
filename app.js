

const express = require("express");
const app = express();
const hbs = require("hbs");

const port = process.env.PORT || 3000;

// definiendo la ruta publica donde se encontraran los archivos del front
app.use(express.static(__dirname + "/public"));

// determinar la ruta donde se encuentran los template parciales 

hbs.registerPartials(__dirname + "/views/parciales", function (err) {});
// express hbs engine para renderizar las paginas del front
app.set("view engine", "hbs");

// helpers -> nos pueden ayudar creando funciones (devuelva algún valor) para ser mostradas en la vista
hbs.registerHelper( 'getYear', () => {
    return new Date().getFullYear();
})

// ruta definida que recibe las peticicones http
app.get("/", function (req, res) {
  res.render("home.hbs",{
      lugar : 'node'
  });
});

// puerto por donde se realizan las peticiones
app.listen(port);
