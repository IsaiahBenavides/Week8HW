const React = require(`react`);

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>New Pokemon</h1>
                <nav>
                    <a href="/pokemon">Back</a> <br />
                </nav>
                <form action="/pokemon" method="POST">
                    {/* NOTE: action will be the route, method will be the HTTP verb */}
                    Name: <input type="text" name="name" /><br />
                    <input type="submit" name="" value="Create Pokemon"/>
                </form>
            </div>
        );
    };
};
module.exports = New