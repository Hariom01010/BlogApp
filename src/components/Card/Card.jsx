import React from 'react'
import parse from 'html-react-parser'
import { Link } from 'react-router-dom'
import storageService from '../../appwrite/storageService'

function Card({title,content, id, imageId}) {
  return (
    <>
        <div className='flex flex-col xl:flex-row items-center p-3 md:p-6 w-2/3 mx-auto my-8 shadow-lg rounded-md bg-[#d9d7d7] dark:bg-[#2d2b2b] dark:text-slate-50'>
          <img src={storageService.getFilePreview(imageId)} alt="featuredImage" width={250} className='rounded-xl'/>
          <div className='mx-4 lg:w-2/3 text-center lg:text-left'>
            <h2 className='my-2 text-sm md:text-2xl font-bold mb-3'>{title}</h2>
            <p className='text-xs md:text-lg'>{parse(content.slice(0,250))}</p>
          </div>
          <div className='lg:w-1/6 flex'>
            <p className='hidden xl:inline hover:cursor-pointer hover:text-pink-600 w-full h-full text-right mt-20'><Link to={`/post/${id}`} title={title} content={content} imageId={imageId} >View -&gt;</Link></p>
            <button className='bg-pink-600 px-4 py-1 my-4 rounded-sm xl:hidden'><Link to={`/post/${id}`}>View</Link></button>
          </div>
        </div>

    </>
  )
}

export default Card