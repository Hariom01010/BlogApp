import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/authService'
import { logout } from '../../store/authSlice'
import { RxCross1 } from 'react-icons/rx'

function Profile() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [showNavBar, setShowNavbar] = useState(false)
    const handleLogOut = ()=>{
        authService.logoutUser()
        .then(()=>{
            dispatch(logout())
           
            navigate("/")
        })
    }

    return (
        <>
        <CgProfile size={24} className='ml-2 cursor-pointer' onClick={()=>setShowNavbar(!showNavBar)}/>
        {
            showNavBar 
            ? <div className='absolute shadow-md bg-[#d9d7d7] dark:bg-[#363636] rounded-md top-16 right-0 py-2'>
                <li className='list-none my-3 pr-16 pl-4 hover:animate-changeColor'><Link to="/add-post">Add Post</Link></li> 
                <li className='list-none my-3 pr-16 pl-4 hover:animate-changeColor'><Link to="/edit-post">Edit Post</Link></li> 
                <hr className='mt-6 mb-3 mx-3'/>
                <button className='hidden md:inline mr-2 py-3 pr-16 pl-4 hover:animate-changeColor' onClick={handleLogOut}>Logout</button>
            </div>
            : <></>
        }
        </>
    )
}

export default Profile