import React from 'react'
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from "react-icons/ai"


function Footer() {
  return (
    <div className='flex flex-col justify-center'>
        <div className='flex-grow'>
            <hr className='mt-24 border-slate-600 dark:border-slate-50'/>
        </div>
        <div className='flex justify-center my-12'>
           <a href='https://www.linkedin.com/in/hariom-vashista-603436226/' target='_blank' className='mx-2'><AiFillLinkedin size={38} /></a>
           <a href='https://github.com/Hariom01010' target='_blank' className='mx-2'><AiFillGithub size={38} /></a>
           <a href='https://github.com/Hariom01010' target='_blank' className='mx-2'><AiFillInstagram size={38} /></a>
        </div>

        <div className='flex justify-center text-sm mt-[]'>
            <p className='mx-4'>Terms of Use</p>
            <p className='mx-4'>Privacy Policy</p>
        </div>
        <div className='flex justify-center text-xs text-gray-400 my-2'>
            <p>&#169; 2023 Hariom Vashista</p>
        </div>
    </div>
  )
}

export default Footer