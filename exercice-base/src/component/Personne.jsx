import React from 'react'


class Person extends React.Component {
  
constructor() {
        super();
        this.state = {
          person: "",

        };
      }
             changerNom = (e) => {
    
                    this.setState({
                    person: e.target.value
                 })
            }

        render() {
                 return (
            <div>
                <input type="text" onChange={this.changerNom} />
                <p>{this.state.person}</p>
            </div>
        )
    }
}


export default Person