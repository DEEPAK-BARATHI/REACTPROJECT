import React from 'react'

export default function Cw2() {
    const hstyle={
        color:'green'
    }
    const divs={
         backgroundColor:'lightblue', 
         color:'darkblue',
         padding:'10px',
         border:'1px solid blue',
         borderRadius:'5px',
         fontSize:'16px'
    }
  return (
    <div style={divs}>
        <h1 style={hstyle}> 
            Inline Style in JSX Example
        </h1>
        <p>
            This is a paragraph with inline styles applied
        </p>
    </div>
  )
}
