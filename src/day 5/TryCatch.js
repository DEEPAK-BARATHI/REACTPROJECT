import React from 'react'

export default function NameTry(props) {
try{

    if(props.name==="ajay")
    {
        throw new Error("ajay is not acceptable")
    }
}
catch(e)
{
    console.log(e);
    document.write("Enter the valid name...")
}
  return (
    <div>
        {props.name}
    </div>
  )
}
