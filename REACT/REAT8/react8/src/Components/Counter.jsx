import React from "react"

export default class Counter extends React.Component{
    componentDidUpdate(prevProp, prevState){
        if(this.props.count !== prevProp.count){
            console.log("i am updated");
        }
    }

    render(){
        return(
            <div>
                <h1>count: {this.props.count}</h1>
            </div>
        )
    }
}