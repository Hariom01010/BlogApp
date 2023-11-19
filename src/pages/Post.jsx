import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import dbService from '../appwrite/dbService'
import parse from 'html-react-parser'
import storageService from '../appwrite/storageService'


function Post() {
    const {postid} = useParams()
    const [blog,setBlog] = useState(null)
    useEffect(()=>{
        dbService.getDocument(postid)
        .then((blogData)=>{
            setBlog(blogData)
            console.log(blogData)
        })
        .catch((err)=>{
          console.log(err)
        })
      }, [])

      
    return (
    <>
    { blog === null
      ? <></>
      :(<div className='text-center sm:text-left'>
            <img src={storageService.getFilePreview(blog.featuredImage)} className='mx-auto my-16' alt="" />
            <h1 className='text-center text-3xl my-8'>{blog.title}</h1>
            <p className='px-8 mt-16'>{parse(blog.content)}</p>
        </div>)
    }
    </>
    )
    
}

export default Post