import React from 'react'

export default function Encomponent(Orcomponent) {
     class NewComponent extends React.Component {
        state={count:0};

        inc=()=>
        {
            this.setState({count:this.state.count+1})
        }
        render()
        {
            return <Orcomponent inc={this.inc} count={this.state.count}></Orcomponent>
        }
  }
  return NewComponent
  
}
