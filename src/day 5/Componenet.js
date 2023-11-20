import React from 'react'

export default function Name({name}) {
    if(name==="harish")
    {
        throw new Error("Name  harish is not acceptable");
    }
    return(
        <div>
            <h1>My name is {name}</h1>
        </div>
    )
}
