import React from 'react'

export default function Dynamic(props) {
  return (
    <div>
        {props.name?<p>{props.name}</p>:<p>Enter your name...</p>}
    </div>
  )
}
// Dynamic.defaultProps=
// {
//   name:"Ajay"
// }