import React from "react";

class App extends React.Component {
    constructor ()
    {
        super()
        this.state={
            data : null

        }
        console.warn("constructor")
    }
    componentDidMount()
    {
        console.warn("componentDisMount")
    }
    render() {
        console.warn("componenetDidMount")
        return (
            <div>
                <h1>Life cycle Method : componentDidmount</h1>
            </div>
        );
    }

}

export default App;