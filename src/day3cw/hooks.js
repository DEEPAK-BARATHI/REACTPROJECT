// import { useState } from "react"
import React, {useState} from 'react'

export default function Hooks() {

    const[clg,setClg]=useState("SKCET")
    const[name,setName]=useState("Amreth");
  return (
    <div>
        <h1> Hi my name is {name} my college name is {clg}</h1>
        <button onClick={()=>(clg=="SKCET"?setClg("KCT"):setClg("SKCET"))}>Click me!!</button>
    </div>
  )
} 
