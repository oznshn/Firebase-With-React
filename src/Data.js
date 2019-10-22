import React, { Component } from 'react'

class Data extends Component {
    render() {
        const {name,surname} = this.props;
        return (
            <div>
             <p>Adı : {name}</p>   
             <p>Soyadi : {surname}</p> 
            </div>
        )
    }
}
export default Data
