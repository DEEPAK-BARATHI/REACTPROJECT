import React, { Component } from 'react'
// two way binding
export default class Two extends Component {
    state={name:""}
    handle=(e)=>{
            this.setState({name:e.target.value})
    }
  render() {
    return (
      <div><h1>{this.state.name}</h1>
      <label><b>Enter the text:</b></label>
      <input type="text" onChange={this.handle}/>
      </div>
    )
  }
}
