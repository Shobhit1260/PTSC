import React from 'react'
import { Link } from 'react-router-dom';
import Resource from './Resource';

function Resources() {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-blue-200 to-white p-24 '>
       <div className='w-full h-min flex flex-col justify-center items-center gap-4 mb-16'>
            <h1 className='text-4xl text-black font-serif font-bold'>Resources</h1>
            <h2 className='text-xl text-gray-500 font-serif'>Explore Our Resources and Workshops</h2>
      </div>  
      <div className='w-full h-min flex justify-center items-center mt-16 mb-16'>
         <div className='w-1/2 flex items-center justify-between'>
         <Link to="" className='text-white font-serif font-bold bg-gray-600 text-xl p-4 rounded-lg'> Resource</Link>
         <Link to="" className='text-white font-serif font-bold bg-gray-600 text-xl p-4 rounded-lg'> Workshop</Link>
         </div>
      </div>
      <Resource/> 
    </div>
  )
}

export default Resources
