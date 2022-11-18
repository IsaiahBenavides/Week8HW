const React = require(`React`);
// const pokemon = require("../models/pokemon");

class Show extends React.Component {
    render() {
        const {name, img} = this.props.pokemon
        console.log(this.props)
        return (
            <div>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{name[0].toLocaleUpperCase() + name.substring(1)}</h2>
                <img src={`http://img.pokemondb.net/artwork/${name}.jpg`} alt="" />
                <a href="/pokemon">BACK</a>
            </div>
        )
    }
}

module.exports = Show