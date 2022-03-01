import React from 'react'


const fruits = ["riz", "pates", "salade", "pommes", "fraise"]

class Aliments extends React.Component {

    constructor(){
        super()
        this.state = {
            aliments : [" riz ", " pates ", " salade ", " pommes ", " fraise ", " fraise "] 
        }
    }

render(){
        return (
            <div>
         <ul>
             {this.state.aliments.map((aliment) => {
                 return <p>{aliment}</p>
             })}
            </ul>
        </div>
        )}
        
} 
export default Aliments 