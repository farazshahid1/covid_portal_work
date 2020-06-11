import React, { Component } from 'react'

import ReactBuilderParent from '../../reactbuilder/ReactBuilderParent'
import User from '../Users/users'
import Form from '../Forms/forms'
import Info from '../Info/info'

class Main extends Component {
    constructor(props){
        super(props)
        this.state={
            __initContext: [

                {
                    url:'https://jsonplaceholder.typicode.com/posts',
                    key:'users'
                }
             ],
        }
    }
    


    render(){
        
        return(
            <ReactBuilderParent __initContext={this.state.__initContext}>
            <Form />
            <Info />
            <User />
            </ReactBuilderParent>
        )
    }
}

export default Main;