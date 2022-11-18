require(`dotenv`).config()
const express = require(`express`);
const app = express()
const port = 3000;
const Pokemon = require(`./models/pokemon.js`);
// const Index = require("./views/Index.jsx");
const reactViews = require(`express-react-views`)
const mongoose = require(`mongoose`)

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  mongoose.connection.once("open", ()=>{
    console.log(`connected to mongo`)
  })

app.set(`view engine`, `jsx`);
app.engine(`jsx`, reactViews.createEngine());

app.use(express.urlencoded({extended:false}))

app.get(`/`, (req, res) =>{
    res.send(`Welcome to the Pokemon App!`);
});

app.get(`/pokemon`, (req, res) =>{
    Pokemon.find({}, (error, allPokemon)=>{
        if(!error){
            res.status(200).render(`Index`, {
                pokemon: allPokemon
            })
        }else{
            res.status(400).send(error)
        }
    })
});

app.get(`/pokemon/new`, (req,res) =>{
    res.render(`New`)
})

app.post(`/pokemon`, (req,res) =>{
    Pokemon.create(req.body, (error, createdPokemon)=>{
        if(!error){
            res.status(200).redirect(`/pokemon`)
        }else{
            res.status(400).send(error)
        }
    })
})

app.get(`/pokemon/:id`, (req, res) =>{
    // res.send(req.params.id);
    res.render(`Show`, pokemon[req.params.id])
});

app.listen(port, ()=>{
    console.log(`listening on port`, port);
});