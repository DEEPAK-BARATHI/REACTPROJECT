import React from 'react'
function Demo(props) {
    return (
        <>
        my name is{props.name}
        </>
    )
}
export default function Li() {
    const list=["apple","orange","mango"]
  return (
    <div>
        {list.map((i)=><Demo name={i} />)}
    </div>
  )
}
