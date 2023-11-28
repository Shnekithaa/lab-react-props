import { Component } from "react";
import "./App.css"


export default class AppClass extends Component{
  
  

  // code here
  render(){
    let data = this.props.imageData();
    let rows = [];
    for(let i = 0; i < data.length; i += 2){
      let firstImg = data[i];
      let secondImg = data[i+1];
      rows.push(
        <div className="img-style">
          <img src={firstImg.img} alt="" />
          <img src={secondImg.img} alt="" />
        </div>
      );
    }
    return <div>
      {rows}
    </div>
  }

}
