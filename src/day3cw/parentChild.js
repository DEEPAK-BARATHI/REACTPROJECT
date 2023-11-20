import React from 'react'

export default function Parent() {
  return (
    <div>
        <Child name="Amreth" />
    </div>
  )
}
function Child(props)
{
   return(
    <div>
        <h1>{props.name}</h1>
    </div>
   )
}
