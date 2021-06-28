import axios from "axios";
import { Component } from "react";
import Card from "./Card";
class ImageContain extends Component {
    
    

    constructor(props) {
        super(props);
        this.state = { 
            chars:[]
        }

    }
    componentDidMount(){
        axios.get(`https://finalspaceapi.com/api/v0/character/`)
      .then(res =>{
          let characters=[];
          res.data.forEach(element => {
            characters.push({img:element.img_url,name:element.name,gender:element.gender});
          });
          this.setState({chars:characters});
      })
    }

    render() { 
        return ( 
            <div className="break-container">
            
            {this.state.chars.map(elem =><div className="BreakingBad"> <Card image={elem.img} name={elem.name} gender={elem.gender}/></div>)}

            </div>
         );
    }
}
 
export default ImageContain;