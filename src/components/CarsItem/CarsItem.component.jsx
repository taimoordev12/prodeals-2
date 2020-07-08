import React, {Component} from 'react';
import '../CarsItem/CarsItem.style.css';

class CarsItem extends Component{
    constructor(props){
      super(props);
    }

  render () {
    return (
        <div>
          <img  src={this.props.person.image.car1} alt="Card image cap" />
          <div className='card-bg card-title shadow'>
            <h5>{this.props.person.name}</h5>
              <p> <span className="color-main-2">{this.props.person.description}</span><br />{this.props.person.description1}</p>
          </div>
          </div>
    
    )
  }

}


export default CarsItem;
