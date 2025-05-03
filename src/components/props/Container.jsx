import React,{Component} from "react";
import './container.css'

class Container extends Component {
    render() {
   
      const {img,title,price,desc,key}=this.props.foods
       return(
        <div>
         
         {/* <div class="foods-container"> */}
           <div className="single-food">
           <div className="img">
           <img src={img} alt={title} />
          </div>
          <div className="title-price">
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className="food-desc">
            {desc}
          </div>
          {/* </div> */}
         </div>
        
      </div>
       ) 
    }
}

export default Container