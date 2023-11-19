import React, { useEffect, useRef, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import Input from '../components/Input/Input';
import authService from '../appwrite/authService';
import { useForm } from 'react-hook-form';
import storageService from '../appwrite/storageService';
import dbService from '../appwrite/dbService';
import { useNavigate } from 'react-router-dom';


function AddPost() {

    const editorRef = useRef(null)
    const {register, handleSubmit} = useForm()
    const [userId, setUseId] = useState(null)
    const navigate = useNavigate()

    useEffect(()=>{
        authService.getUser().then((data)=>{
            setUseId(data.$id)
        })
        .catch(()=>{
            navigate("/")
        })
    },[])
    
    
    const log = async (data)=>{
        try {
            const imgData = await storageService.fileUpload(data.image[0])
            console.log("Succesful Upload")
            const featuredImage = imgData.$id
            const content = editorRef.current.getContent()
            console.log(data)
            try {
                const blogData = {...data, content, featuredImage, userId}
                console.log(blogData)
                await dbService.createBlog({...blogData})
                console.log("Blog Created Succefully")
                navigate("/posts")
            } catch (error) {
                console.log(error)
            }
        } catch (error) {
            throw error
        }
    }


    return (
        <>
            <form className='flex flex-col w-3/4 mx-auto my-12' onSubmit={handleSubmit(log)}>
                <Input id="title" type="text" placeholder = "title" label="Title: " name="title" classname="bg-slate-200" {...register("title",{required:true})}/>

                <Input id="featuredImage" type="file" label="Featured Image: " name="image" accept="image/*" {...register("image")}/>

                <label htmlFor="status" className='dark:text-slate-50'>Status: </label>
                <select name="status" id="status" defaultValue="active" className='shadow-inner outline-none px-2 py-1 my-2 mb-5 text-black' {...register("status")}>
                    <option value="active" className='text-black'>Active</option>
                    <option value="notactive" className='text-black'>Not Active</option>
                </select>

                <Editor
                    onInit={(evt, editor) => editorRef.current = editor}
                    apiKey='9zbyny3xu2nv68n9fzez4tm7x9cu03kfxeyrmz3mu4mw9zbc'
                    init={{
                        height: 250,
                        menubar: false,
                        plugins: [
                        'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                        'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                        'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                        ],
                        toolbar: 'undo redo | blocks | ' +
                        'bold italic forecolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                    }}
                />
                <button typek="submit" className='bg-pink-600 text-slate-50 mx-auto mt-12 py-2 px-8 rounded-md hover:bg-pink-800 rounded:md'>Submit</button>
            </form>
        </>
    )
    
}

export default AddPost