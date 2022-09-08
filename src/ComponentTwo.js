import React, { PureComponent } from 'react';
import Tamilnadu from "./images/tamilnadu.png";
import Goa from "./images/goa.png";

class ComponentTwo extends PureComponent{ 
//   shouldComponentUpdate(nextProps,nextState){
//     return this.props.stateTwo !== nextProps.stateTwo
// }   
render(){
  console.log("render component #2");
  return (
    <>
     <h1 align="center">2</h1>
    {this.props.stateTwo ? <img src={Tamilnadu} alt="tamildanu" /> : <img src={Goa} alt="goa" /> }
    </>
   
  )
}
}

export default ComponentTwo;