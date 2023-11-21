import React from 'react'
import parse from 'html-react-parser'
import { Link, useNavigate } from 'react-router-dom'
import storageService from '../../appwrite/storageService'
import { MdDelete } from "react-icons/md";
import { useEffect } from 'react';
import authService from '../../appwrite/authService';
import { useState } from 'react';
import dbService from '../../appwrite/dbService';

function Card({title,content, id, imageId, userId}) {

  const navigate =  useNavigate()
  const [btnClass, setBtnClass] = useState("hidden")

  useEffect(()=>{
    authService.getUserInfo()
    .then((data)=>{
      if((data.$id == userId) || (data.$id == "655ba169d734d90398d7")){
        setBtnClass("")
      }
    }).catch(()=>{
      setBtnClass("hidden")
    })
  },[])

  const deleteBlog = ()=>{
    setBtnClass("pointer-events-none opacity-50")  
    dbService.deleteDocument(id)
    .then(()=>{
      navigate("/")
    })
  }
  return (
    <>
        <div className='flex flex-col xl:flex-row items-center p-3 md:p-6 w-2/3 mx-auto my-8 shadow-lg rounded-md bg-[#d9d7d7] dark:bg-[#2d2b2b] dark:text-slate-50'>
          <img src={storageService.getFilePreview(imageId)} alt="featuredImage" width={250} className='rounded-xl'/>
          <div className='mx-4 lg:w-2/3 text-center lg:text-left'>
            <h2 className='my-2 text-sm md:text-2xl font-bold mb-3'>{title}</h2>
            <p className='text-xs md:text-lg'>{parse(content.slice(0,250))}</p>
          </div>
          <div className='lg:w-1/6 w-full flex items-end justify-center mt-20'>     
            <button className='bg-pink-600 text-slate-50 px-4 py-1 rounded-md'><Link to={`/post/${id}`}>View</Link></button>
            <button className={`bg-red-700 text-slate-50 px-2 h-full rounded-md py-1 mx-2 flex justify-center items-center ${btnClass}`} onClick={deleteBlog}><MdDelete className='mr-1'/>Delete</button>
          </div>
        </div>

    </>
  )
}

export default Card