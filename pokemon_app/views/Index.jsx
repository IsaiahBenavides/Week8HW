const React = require(`React`);
const pokemon = require("../models/pokemon");

class Index extends React.Component {
    render() {
        return (
            <div>
                <h1>Look at all the Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Create Your Pokemon!</a>
                </nav>
                <div>
                    <ul>
                        {
                            pokemon.map((pokemon, i) =>{
                                let capitalized = pokemon.name[0].toLocaleUpperCase() + pokemon.name.substring(1);
                                return (
                                    <li key = {i}>
                                        This is{` `}
                                        <a href={`/pokemon/${i}`}>
                                            {capitalized}
                                        </a>{` `}
                                        {/* <img src={pokemon.img} alt="" /> */}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

module.exports = Index