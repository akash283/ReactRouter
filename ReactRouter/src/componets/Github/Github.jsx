import React, { useEffect,useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Github = () => {

    const data=useLoaderData()

    // const[data,setData]=useState([])

    // useEffect(()=>{
    //     fetch('https://api.github.com/users/akash283')
    //     .then((res)=>res.json())
    //     .then((data)=>{
    //         console.log(data)
    //         setData(data)
    //     })
    // },[])


  return (
    <div className='text-center m-4 bg-gray-600 text-3xl p-4'>
        Github followers: {data.followers} 
        <img src={data.avatar_url} alt=""  width={300}/>
        </div>
  )
}

export default Github

// export const githubInfoLoader=async()=>{
//    const res= await fetch('https://api.github.com/users/akash283')
//     return res.json()
// }

export const githubInfoLoader=async()=>{
    const res=await fetch('https://api.github.com/users/akash283')
    return res.json()
}