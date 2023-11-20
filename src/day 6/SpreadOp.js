import React, { Component } from 'react'

export default class Spread extends Component {
  render() {
    const{title1,...rest}=this.props;
    return (
      <div>
        <h1>Title is {title1}</h1>
        <input {...rest}></input>
      </div>
    )
  }
}
