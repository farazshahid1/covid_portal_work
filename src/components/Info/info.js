import React from 'react'
import './info.css'
import ReactBuilderParentComponent from '../../reactbuilder/ReactBuilderParentComponent'


class Info extends ReactBuilderParentComponent{
    constructor(props) {
        super(props);

        this.state ={
            name: '',
            age : '',
            email: '',
        }
    }

    componentDidMount()
    {
        this.addReactBuilderEventListener('Form.add', 'gotEvent')
        
    }

    gotEvent(e){
       
        this.setState({
            ...e.detail.data
        })
    }

    render() {

        return (
            <div className="divs1">
                <h3>{this.state.name}</h3>
                <h3>{this.state.age}</h3>
                <h3>{this.state.email}</h3>
            </div>
        )

    }
} 

export default Info;