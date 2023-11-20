import React,{useEffect,useState} from 'react'

// export default function UseEff() {
//     const[count,setCount]=useState(0);
//     useEffect(()=>{
//         document.title=`Count: ${count}`;
//     })
//   return (
//     <div>
//         <h1>
//             Count value {count}
//             <button onClick={()=>setCount(count+1)}>Click Me</button>
//         </h1>
//     </div>
//   )
// }



export default function UseEff() {
    const[name,setName]=useState("Amreth");
    useEffect(()=>
    {
        setTimeout(()=>
        {
            setName("Sachin");
        },3000)
    })
  return (
    <div>
        {name}
    </div>
  )
}
