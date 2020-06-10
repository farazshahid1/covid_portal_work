import React, {Component} from 'react'
import './forms.css'
import ReactBuilderParentComponent from '../../reactbuilder/ReactBuilderParentComponent'

class form extends ReactBuilderParentComponent{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            age: '',
            email: ''
        }
    }
    

    changeHandler = (event) => {

        let inputTagName = event.target.name;

        if(inputTagName === 'username'){
            this.setState({
                name: event.target.value
            })
        }
        
        if(inputTagName === 'age'){

            if (!Number(event.target.value)) {
                alert("Your age must be a number");
              }
              else{
                 
                  if(event.target.value < 100) {
                        this.setState({
                            age: event.target.value
                        })
                    }
                    else{
                        alert("Your age must less than 100");
                    }
                } 
            
        }
        else if(inputTagName === 'email'){
            this.setState({
                email: event.target.value
            })
        }
        
      
      //  console.log(event.target.name)
    }

    componentDidMount(){

    }

    
    mySubmitHandler = (event) => {
        event.preventDefault();
        alert("submited Form")
        
        const state = this;
        debugger
        
        this.addReactBuilderEventListener('Form.add', function(e) {
            console.log("workingggg")
            console.log(e.detail.data)
        });

        const v = {...this.state}

        this.trigger(v, 'Form.add', null)

        
    }

    showHandler = (event) => {
       
        alert(event)
       
    }

    render(){

        return(
            <div className='divs'>
                <h1>FORM</h1>
                <br/>
                <form onSubmit={this.mySubmitHandler}>
                <label >Name</label>
                <input className="InputElement" 
                type='text' name='username' placeholder='Username' 
                 onChange=      {this.changeHandler}/>
                <br/>
                <label>Age</label>
                <input className="InputElement" type='text' 
                name='age' placeholder='Age' 
                value={this.state.age} onChange={this.changeHandler}/>
                <br/>
                <label>Email</label>
                <input className="InputElement" type='text' 
                name='email' placeholder='Email' 
                onChange={this.changeHandler}/>
                <br/>
                <input className='Button' type='submit'/>
                </form>
                <button type="button" onClick={this.showHandler}>Show</button>
            </div>
           
           
            
        )
            
        
    }
}

export default form;