import React,{Component} from 'react'

export default class Proper extends Component {
  render() {
    return (
      <div>
        <h1>
            Hello every one this is <ul>classProps</ul>  my name is 
            {this.props.name} and my college name is {this.props.clg}
        </h1>
      </div>
    )
  }
}
