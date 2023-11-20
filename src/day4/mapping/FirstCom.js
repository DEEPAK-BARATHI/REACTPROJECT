import React from 'react'

export default function Full() {
const val=["ajay","ashwin","aravind"]
const dis=val.map((v)=>
{
    return <li style={{listStyle:"inside"}}>{v}</li>
})
  return (
    <>
        <ul>{dis}</ul>
    </>
  )
}
