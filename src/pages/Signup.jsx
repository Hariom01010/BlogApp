import React, { useState } from 'react'
import Input from '../components/Input/Input'
import { Link, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import authService from '../appwrite/authService'
import { useDispatch } from 'react-redux'
import { login } from '../store/authSlice'
import { FaGoogle,FaGithub } from 'react-icons/fa'
import Lottie from "lottie-react"
import signupAnimation from "../assets/signup.json"

function Signup() {
  const {register, handleSubmit, formState:{errors}} = useForm()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const signup = (data)=>{
    authService.createUser({...data})
    .then(()=>{
      console.log(data)
      authService.loginUser({...data})
      .then(()=>{
        dispatch(login())
        navigate("/")
        authService.verifyUser()
      })
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
    <>

      <div className='flex justify-center items-center mt-16'>
          {/* Image  */}
          <div className='w-1/2 hidden lg:block'>
              <Lottie animationData={signupAnimation} className='w-2/3 md:h-[40rem]'/>
          </div>

        {/* Form  */}
          <div className='bg-[#dddddd] text-black w-full mx-7 py-8 rounded-md shadow-md lg:w-1/3 2xl:mx-3 dark:text-slate-50 dark:bg-[#2b2828]'>
              <div className='text-center'>
                  <h3 className='font-extrabold mb-2 text-2xl'>Welcome Back</h3>
                  <p className='mb-12 text-sm'>Already have an account? <Link to="/login" className='text-pink-600'>Login</Link></p>
              </div>

              <div>
                  <form className='text-black flex flex-col px-8' onSubmit={handleSubmit(signup)} noValidate> 
                      <Input type="text" placeholder="Name" label="Name:" id="username" name='name' {...register("name",{required:true})}/>
                      {errors.name?.type === "required" && (<p className='text-red-800 -mt-4 mb-6'>Name is missing</p>)}

                      <Input type="Email" placeholder="Email" label="Email:" id="email" name="email" {...register("email", {required:true})}/>
                      {errors.email?.type === "required" && (<p className='text-red-800 -mt-4 mb-6'>Email is missing</p>)}
                      {/* {errors.email?.type === "pattern" && (<p className='text-red-800 -mt-4 mb-6'>Invalid Email Address</p>)} */}

                      <Input type="password" placeholder="Password" classname='mb-8' label="Password:" id="password" name="password" {...register("password",{required:true})}/>
                      {errors.password?.type === "required" && (<p className='text-red-800 -mt-4 mb-6'>Password is missing</p>)}

                      <button type='submit' className='bg-pink-600 py-2 mx-12 text-slate-50 hover:bg-pink-800 '>Submit</button>

                      <div className='flex justify-around'>
                        <button className=' rounded-md my-4 px-4 py-2 bg-[#f5f2f2] dark:bg-[#484848] text-slate-600 dark:text-slate-50 shadow-md flex items-center' onClick={(e)=>loginWithGoogle(e)}><FaGoogle className='mx-2'/>Google</button>
                        <button className=' rounded-md my-4 px-4 py-2 bg-[#f5f2f2] dark:bg-[#484848] text-slate-600 dark:text-slate-50 shadow-md flex items-center' onClick={(e)=>loginWithGithub(e)}><FaGithub className='mx-2'/>Github</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
    </>
  )
}

export default Signup