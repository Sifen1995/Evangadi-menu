import React, { Component } from 'react';
import data from '../../../../Resources/practice-exercise-resource-file-content-1740763074766/data'
import Container from '../props/Container';

export default class ConFour extends Component {
  render() {
    return (
        <div className="all-container">
        <div className="foods-container">
        {data?.map(function(obj,index){
            //   console.log(obj)  
         return <Container key={obj.id} foods={obj} />      
        }
          
        )}
       </div>
      </div>
     
    )
  }
}
