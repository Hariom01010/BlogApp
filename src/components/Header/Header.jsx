import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { BsSun, BsMoon } from "react-icons/bs"
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx"
import { useDispatch, useSelector } from 'react-redux'
import { darkTheme, lightTheme } from '../../store/themeSlice'
import authService from '../../appwrite/authService'
import { login, logout } from '../../store/authSlice'

function Header() {
    const [theme, setTheme] = useState("light")
    const [showNavBar, setShowNavbar] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loggedIn = useSelector((state)=>{
        return state.authReducer.loggedIn
    })

    const handleThemeDark = ()=>{
        dispatch(darkTheme())
        setTheme("dark")
    }
    
    const handleThemeLight = ()=>{
        dispatch(lightTheme())
        setTheme("light")
    }
    
    const handleShowNavbar = ()=>{
        setShowNavbar((prevValue)=>!prevValue)
    }
    
    const handleLogOut = ()=>{
        authService.logoutUser()
        .then(()=>{
            dispatch(logout())
           
            navigate("/")
        })
    }
    

    useEffect(()=>{
        authService.getUser()
        .then((userData)=>{
            if(userData){
                dispatch(login())
            }else{
                dispatch(logout())
            }
        })
    },[loggedIn])


    return (    
        <>
        <div className='px-6 py-4 flex justify-between items-end shadow-md sticky'>
            <div className='text-pink-700 text-xl font-bold md:text-2xl'>
                <h2><Link to="/">BlogNow</Link></h2>
            </div>

            {/* Desktop Navbar Home, About and Post  */}
            <div className='hidden md:block'>
                <ul className='flex'>
                    <li className='px-4 py-1'><Link to="/">Home</Link></li>
                    <li className='px-4 py-1'><Link to="/about">About</Link></li>
                    <li className='px-4 py-1'><Link to="/posts">Posts</Link></li>
                </ul>
            </div>

            {/* Bigger Screen Navbar */}
            <div>
                <div className="flex justify-between">

                    {/* Theme  */}
                    {
                        theme== "light" ? <button onClick={handleThemeDark} className='mr-3'><BsSun size={23}/></button> : <button onClick={handleThemeLight} className='mr-3'><BsMoon size={20}/></button>
                    }

                    {/* Login and Options  */}
                    {
                        loggedIn
                        ?<>
                            <li className='hidden md:inline list-none m-2 hover:animate-changeColor'><Link to="/add-post">Add Post</Link></li> 
                            <button className='hidden md:inline mr-2 py-1 px-3 text-slate-50 rounded-md hover:animate-changeColor bg-pink-600' onClick={handleLogOut}>Logout</button>

                        </> 
                        : <div className='ml-4'>
                            <button className='hidden md:inline mx-1 text-pink-600'><Link to="/login">Login</Link></button>
                            <button className='hidden md:inline mx-1 bg-pink-600 text-slate-50 p-1 rounded-md'><Link to="/signup">Signup</Link></button>
                          </div>
                    }

                    {/* Mobile Navbar  */}
                    <div className={`ml-4 rounded-full cursor-pointer md:hidden`} onClick={handleShowNavbar}>
                        <p className='p-1'><RxHamburgerMenu size={22}/></p>   
                    </div>
                </div>

                <div className={`${showNavBar?"block":"hidden"} right-0 top-0 w-[100%] bg-[#dddddd] animate-slideInTop dark:bg-[#212121] absolute right-300 shadow-md px-3 py-3 text-left border rounded-sm dark:border-pink-600`} >
                    <button onClick={handleShowNavbar} className='mb-4'><RxCross1 /></button>
                    <ul className='flex flex-col '>
                        <div>
                            <li className='my-2 md:hidden'><Link to="/" onClick={handleShowNavbar}>Home</Link></li>
                            <li className='my-2 md:hidden'><Link to="/about" onClick={handleShowNavbar}>About</Link></li>
                            <li className='my-2 md:hidden'><Link to="/posts" onClick={handleShowNavbar}>Posts</Link></li>
                        </div>
                        <div className='flex md:block'>
                            <hr className='my-2 sm:hidden'/>
                            {
                                loggedIn
                                ?<>
                                    <li><button className='text-slate-50 mr-4 bg-pink-600 px-4 py-1 my-2 rounded-md' onClick={handleLogOut}>Logout</button></li>
                                    <li  className='py-1 my-2'><Link to="/add-post">Add Post</Link></li> 
                                </> 
                                : <>
                                    <li><Link to="/signup" className='text-pink-600 mr-3' onClick={handleShowNavbar}>Signup</Link></li>
                                    <li><Link to="/login" className='bg-pink-600 text-slate-50 px-2 py-1 rounded-md' onClick={handleShowNavbar}>Login</Link></li>
                                  </>
                            }
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default Header