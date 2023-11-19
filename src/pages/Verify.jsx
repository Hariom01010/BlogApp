import React from 'react'
import { useEffect } from 'react'
import authService from '../appwrite/authService'

function Verify() {
    useEffect(()=>{
        const urlParams = new URLSearchParams(window.location.search)
        const userId = urlParams.get('userId')
        const secret = urlParams.get("secret")
        authService.updateVerification(userId,secret)
    }, [])
  return (
    <div>
        <h1 className='text-center my-32 text-4xl font-extrabold'>Verified Successfully 🥳</h1>
    </div>
  )
}

export default Verify