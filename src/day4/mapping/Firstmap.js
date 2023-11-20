import React from 'react'

export default function Full() {

const vari=["Amreth","Arjun","Aravind"]
const dis=vari.forEach((val)=>
{
    return <li>{val}</li>
})
  return (
    <div>
        <ul>
            {dis}
        </ul>
    </div>
  )
}
