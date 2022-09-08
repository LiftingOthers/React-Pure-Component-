import React, { PureComponent } from 'react';
import Tamilnadu from "./images/tamilnadu.png";
import Goa from "./images/goa.png";

class ComponentOne extends PureComponent{
  // shouldComponentUpdate(nextProps,nextState){
  //     return this.props.stateOne !== nextProps.stateOne
  // }      
render(){
  console.log("render component #1");
  return (
    <>
    <h1 align="center">1</h1>
    {this.props.stateOne ? <img src={Tamilnadu} alt="tamildanu" /> : <img src={Goa} alt="goa" /> }
    </>
   
  )
}
}

export default ComponentOne;