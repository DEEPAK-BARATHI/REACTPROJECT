import React, { Component } from 'react'

export default class Comp extends Component {
    state={color:"red"};

    //It helps the components prevent from any update if (return false)
    shouldComponentUpdate()
    {
        return true;
    }
    // in-Built function it will call automatically 
    componentDidMount()
    {
        setTimeout(()=>{
            this.setState({color:"green"})
        },3000)
    }
    getSnapshotBeforeUpdate(prevProps,prevState)
    {
        document.getElementById("i").innerText=`Previous Value in style: ${prevState.color}`
    }
    componentDidUpdate()
    {
        document.getElementById("i1").innerText=`current value: ${this.state.color}`
    }
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <p id="i"></p>
        <p id="i1"></p>
      </div>
    )
  }
}
