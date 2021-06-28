import React , {Component} from 'react';

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            image:props.image,
            name:props.name,
            gender:props.gender

        }
    }
    render() { 
        return ( 
            <>
            <div className="img-container">
            <img src={this.state.image} alt={this.state.name} />
          </div>
          <div className="info">
            <h3 className="name">{this.state.name}</h3>
            <small className="type">Gender: <span>{this.state.gender}</span></small>
          </div>
          </>
        );
    }
}

export default Card;