import React from 'react'
import { Link } from 'react-router-dom';

function Cards({title,description,buttonText}) {
  return (
    <div className='flex flex-col items-start justify-center gap-4 w-1/3 h-[300px] bg-white shadow-lg rounded-lg p-4 m-8'>
        <span className=' text-lg font-bold text-black'>{title}</span>
        <p className='text-gray-500'>{description}</p>
        <Link to="" className='bg-white border-2 shadow-lg p-2 text-md rounded-lg mt-4'>{buttonText}</Link>
    </div>
  )
}

export default Cards
