import React from 'react';

 class Title extends React.Component{
    constructor(props) {
        super(props);
    }
    render(){
    return(
        <div>
        <h1>Bonjour{this.props.name}</h1>
        <p>Si tu es la dit le moi stp {this.props.message}</p>
        </div>
    )
}
}

export default Title