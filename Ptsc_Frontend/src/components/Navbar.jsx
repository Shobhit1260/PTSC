import React from 'react'
import { Link } from 'react-router-dom';
import { MdDarkMode } from "react-icons/md";

function Navbar() {
  return (
    <div className=' w-full h-[80px] bg-white/80 flex justify-between items-center px-8 py-4 border-b-2 border-gray-200 shadow-lg font-sans'>
       <div className='flex gap-1 items-center w-1/4' >
        <img src="https://raw.githubusercontent.com/coder-writes/knit-code-connect-hub/refs/heads/main/public/favicon.ico" className='h-10 w-10' alt="ptsc"  />
        <span className='text-white font-bold text-xl dark:text-cyan-400'> PTSC </span>
       </div>
       <div className='flex gap-12 text-gray-700  text-sm '>
               <Link to="/">Home</Link>
               <Link to="" >About</Link>
               <Link to="">Teams</Link>
               <Link to="">Events</Link>
               <Link to="">Resources</Link>
               <Link to="">Leaderboard</Link>
               <Link to="">Contact</Link>
               <Link to="">Be Member</Link>
               <button className='text-xl'><MdDarkMode /></button>
            
        
       </div>
    </div>
  )
}

export default Navbar
