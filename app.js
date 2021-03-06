const express = require("express");
const path = require("path");
const rutasMain = require("./routes/main.js")

const app = express();

const publicPath = path.resolve(__dirname,"./public");
app.use( express.static(publicPath) );


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Servidor ejecutándose en el puerto ",PORT));

app.use("/",rutasMain);
app.use("/:CreaTuCuenta",rutasMain);
app.use("/:vender",rutasMain);
app.use("/:login", rutasMain);


// Rutas antes
// app.get("/",(req, res) => {
//     res.sendFile(path.resolve(__dirname,"./views/home.html"))
// });

// app.get("/CreaTuCuenta",(req, res) => {
//     res.sendFile(path.resolve(__dirname,"./views/register.html"))
// });


// app.get("/vender",(req, res) => {
//     res.sendFile(path.resolve(__dirname,"./views/newProduct.html"))
// });

// app.get("/login",(req, res) => {
//     res.sendFile(path.resolve(__dirname,"./views/login.html"))
// });