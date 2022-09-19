import React from "react";
import Card from './Card'
import './Cards.css'

// let arr = [1,2,3,4,5];

let Cards = () => {

   let [len,setLen] = React.useState([1,2,3,4,5])
//   let total =  len.map(el=>{
//         return <Card/>
//     });

    let add = () => {
        // you have to use a callback function and destructure 
       setLen(len=>[...len,len[len.length-1]+1])
    }

    let remove = () => {
       setLen(len.filter(curr=>{
        return curr!==len[len.length-1];
       }))
    }
    return (
        <>
      <div className='cards'>
        {len.map(el=>{
        return <Card/>
    })}
      </div>
      <button onClick={add} >add</button>
      <button onClick={remove} >delete</button>
      </>
    )
};

export default Cards