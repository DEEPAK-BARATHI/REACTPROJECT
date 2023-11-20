import React, { Component } from 'react'

export default class De extends Component {
  render() {
    return (
      <div>
        <h1>
            hello this <i>Default class</i><br></br>
            my name is {this.props.name} and clg name is {this.props.clg}
        </h1>
      </div>
    )
  }
}

De.defaultProps=
{
    clg:"SKCET"
}