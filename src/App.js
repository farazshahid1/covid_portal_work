import React, {Component} from 'react';
import './App.css';
import Form from './components/Forms/forms';
import Info from './components/Info/info'
class App extends Component{


  render(){

    return (
      <div className="App">
        <Form /> 
        <Info />
      </div>
    )
  }
}

export default App;
