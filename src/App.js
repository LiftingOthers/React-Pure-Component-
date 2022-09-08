import React,{Component} from "react";
import ButtonComponent from "./ButtonComponent";
import ComponentOne from "./ComponentOne";
import ComponentTwo from "./ComponentTwo";
import "./App.css";
class App extends Component  {
  constructor(props){
     super(props);
     this.state = {
       stateOne : false,
       stateTwo : false
     }
  }
  funcOne =()=>{
     this.setState({stateOne:!this.state.stateOne,statethree:'priya'});
  }

 funcTwo =()=>{
    this.setState({stateTwo : !this.state.stateTwo});
 }
 render(){
  return (
   <>
   <section>
     <h1>How To Avoid Re-Render React Class Component</h1>
     <div className="flex">
          <div>
            <ComponentOne stateOne={this.state.stateOne} statethree={this.state.statethree}/>
            <ButtonComponent click={this.funcOne}/>
          </div>
          <div>
            <ComponentTwo stateTwo={this.state.stateTwo}/>
            <ButtonComponent  click={this.funcTwo}/>
          </div>
     </div>
   </section>
   </>
  );
}
}

export default App;
