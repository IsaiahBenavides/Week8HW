const React = require(`React`);
// const pokemon = require("../models/pokemon");

class Show extends React.Component {
    render() {
        const {name, img} = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Gotta Catch 'Em All!</h1>
                <h2>{name[0].toLocaleUpperCase() + name.substring(1)}</h2>
                <img src={`${img}.jpg`} alt="" />
                <a href="/pokemon">BACK</a>
            </div>
        )
    }
}

module.exports = Show