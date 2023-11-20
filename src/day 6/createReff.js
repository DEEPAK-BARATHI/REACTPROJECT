import React, { Component } from 'react'

export default class Create extends Component {

    myRef=React.createRef();

    handle=(e)=>
    {
      e.preventDefault();
      const val=this.myRef.current.value;
      console.log(val);
      console.log(this.myRef.current.placeholder);
    }
  render() {
    return (
      <div>
            <form onSubmit={this.handle}>
                <input type="text" placeholder="raju bhai"ref={this.myRef}></input>
                <button type="submit">Submit</button>
            </form>
      </div>
    )
  }
}
