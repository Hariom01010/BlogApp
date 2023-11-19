import React from 'react'
import Input from '../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/authService'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { FaGoogle, FaGithub } from "react-icons/fa";
import Lottie from "lottie-react";
import loginAnimation from "../assets/login.json"

function Login() {

    const {handleSubmit, register, formState: { errors }} = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const loginUser = (data)=>{
        console.log("submitted")
        authService.loginUser(data)
        .then(()=>{
            dispatch(login(data))
            navigate("/")
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const loginWithGoogle = (e)=>{
        e.preventDefault()
        authService.googleLogin()
    }

    const loginWithGithub = (e)=>{
        e.preventDefault()
        authService.githubLogin()
    }
    
    return (
      <div className='flex justify-center items-center h-screen'>
          {/* Image  */}
          <div className='w-1/2 hidden lg:block'>
              <Lottie animationData={loginAnimation} loop={true} className='w-2/3 md:h-[35rem]'/>
          </div>
  
         {/* Form  */}
          <div className='bg-[#dddddd] text-black w-full mx-7 py-20 rounded-md shadow-md lg:w-1/3 2xl:mx-3  dark:text-slate-50 dark:bg-[#2b2828]'>
              <div className='text-center'>
                  <h3 className='font-extrabold mb-2 text-2xl'>Welcome Back</h3>
                  <p className='mb-12 text-sm'>Don&apos;t have an account? <Link to="/signup" className='text-pink-600'>Sign Up</Link></p>
              </div>
  
              <div>
                  <form className='text-black flex flex-col px-8' onSubmit={handleSubmit(loginUser)}>
                      <Input type="Email" placeholder="Email" label="Email:" id="email" name="email" {...register("email",{required:true})}/>
                      {errors.email?.type =="required" && (<p className='text-red-800 -mt-4 mb-8'>Email is missing</p>)}

                      <Input type="password" placeholder="Password" classname='mb-8' label="Password:" id="password" name="password" {...register("password",{required:"<p>Password is missing</p>"})}/>
                      {errors.password?.type =="required" && (<p className='text-red-800 -mt-4 mb-8'>Password is missing</p>)}

                      <button type='submit' className='bg-pink-600 py-2 mx-12 text-slate-50 hover:bg-pink-800 '>Submit</button>
                      
                      <div className='flex justify-around'>
                        <button className=' rounded-md my-4 px-4 py-2 bg-[#f5f2f2] dark:bg-[#484848] text-slate-600 dark:text-slate-50 shadow-md flex items-center' onClick={(e)=>loginWithGoogle(e)}><FaGoogle className='mx-2'/>Google</button>
                        <button className=' rounded-md my-4 px-4 py-2 bg-[#f5f2f2] dark:bg-[#484848] text-slate-600 dark:text-slate-50 shadow-md flex items-center' onClick={(e)=>loginWithGithub(e)}><FaGithub className='mx-2'/>Github</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    )
  }
  
  export default Login