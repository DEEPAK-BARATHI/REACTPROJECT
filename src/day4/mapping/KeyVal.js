import React from 'react'

export default function Key() {
    const my=[
        {id:1,value:'apple',class:"fun"},
        {id:2,value:'orange',class:"fun"},
        {id:3,value:'tomato',class:"fun"},
        {id:5,value:'carrot',class:"fun"}
    ]
    const lis=my.map((i)=>{return <li key={i.id}  id={i.id} class={i.class}> {i.value}</li>});
  return (
    <ul>
        {lis}
    </ul>
  )
}
