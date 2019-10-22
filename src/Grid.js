import React, { Component } from 'react'
import Firebase from 'firebase'
import config from './config'
import Data from './Data'



class Grid extends Component {
    
    constructor(props)
    {
        super(props);
         this.state = {
                records : [] 
            }
    }

    componentDidMount()
    {
        this.app = Firebase.initializeApp(config);
        this.database =this.app.database().ref().child('/');
        this.database.on('value',item=>{
            this.setState({
                records:item.val()
            });
       });
    }

    render()
     {     
        return (
            <div>
            {
               this.state.records.map(user=>{
                    return(
                        <Data
                           key= {user.id}
                           name = {user.name.first}
                           surname = {user.name.last}
                        />
                    )
                })
            }
            </div>
        )
    }
}
 
export default Grid



