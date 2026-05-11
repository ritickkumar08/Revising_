import React from "react";
import Counter from "./Components/Counter";


export default class App extends React.Component{


  constructor(){
    super()
    this.state ={
      count:0,
    }
  }

  decrease(){
    this.setState({count : this.state.count - 1})
  }

  componentWillUnmount(){
    console.log("i got deleted");
  }

  componentDidMount(){
    console.log("hello");
  }

  render(){
    return(
      <div>
        <button onClick={()=>this.setState({count: this.state.count+1})}>Increase</button>
        {/* <h1>Count: {this.state.count}</h1> */}
        <Counter count={this.state.count}/>
        <button onClick={this.decrease.bind(this)}>Decrease</button>
      </div>
    )
  }
}