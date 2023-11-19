import React, { useEffect, useState } from 'react'
import dbService from '../appwrite/dbService';
import Card from '../components/Card/Card';
import { useDispatch } from 'react-redux';
import { setBlog } from '../store/blogSlice';

function Posts() {
  const dispatch = useDispatch()
  let [blogs,setBlog] = useState();
  useEffect(()=>{
    dbService.getDocuments()
    .then((blogData)=>{
      setBlog(blogData.documents)
    })
    .catch((err)=>{
      console.log(err)
    })
  }, [])

  return (
  <>
    {
      
      blogs == null ? <></> :
      <div>
         <h1 className='text-3xl my-8 text-center'>POSTS</h1>
        {
          blogs.map((blog)=>{
            return <Card key={blog.$id} title={blog.title} content={blog.content} id={blog.$id} imageId={blog.featuredImage}/>
          })
        }
      </div>
    }
  </>
  )
}

export default Posts