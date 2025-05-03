import React,{Component} from 'react'
import './App.css';

import Title from './components/title/Title';

import ConFour from './components/ConFour/ConFour';
class App extends Component {
  render() {
    return(
      <div>
        <Title/>            
        <ConFour/>
     
        </div>
         
     
     
    )
  }
}

export default App
