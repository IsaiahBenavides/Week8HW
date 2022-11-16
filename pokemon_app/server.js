const express = require(`express`);
const app = express()
const port = 3000;
const pokemon = require(`./models/pokemon.js`);
// const Index = require("./views/Index.jsx");
const reactViews = require(`express-react-views`)

app.set(`view engine`, `jsx`);
app.engine(`jsx`, reactViews.createEngine());

app.get(`/`, (req, res) =>{
    res.send(`Welcome to the Pokemon App!`);
});

app.get(`/pokemon`, (req, res) =>{
    res.render(`Index`);
});

app.listen(port, ()=>{
    console.log(`listening on port`, port);
});