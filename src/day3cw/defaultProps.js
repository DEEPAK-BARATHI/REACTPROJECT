import React from 'react'

export default function Defaultp(props) {
  return (
    <div><h1>{`This is default props =>hello makkale my name ${props.name} and my age is ${props.age}`}</h1></div>
  )
}

Defaultp.defaultProps={
    name:"virat"
}
