import React from 'react'

function Input({id, type="text", placeholder, classname="", label, name, ...props }, ref) {

  return (
    <>
      <label htmlFor={id} className='dark:text-slate-50'>{label}</label>
      <input id={id} type={type} className={`shadow-inner outline-none px-2 py-1 my-2 mb-5 text-black ${classname}`} placeholder={placeholder} name={name} {...props} ref={ref}/>
    </>
  )
}

export default React.forwardRef(Input)