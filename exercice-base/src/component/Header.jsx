import React from "react";

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
        <div>
            <header>Salut salut</header>
            <h1></h1>
            <img src={this.props.image}/>
            <p></p>
        </div>
        )

    }
}

export default Header 