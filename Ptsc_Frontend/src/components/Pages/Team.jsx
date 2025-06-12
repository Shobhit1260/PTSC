import React from 'react'
import TeamCard from '../Utils/TeamCard'

function Team() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-blue-200 to-white'>
        <div className='w-full h-min flex flex-col justify-center items-center gap-4 pt-24'>
            <h1 className='text-4xl text-black font-serif font-bold'>Our Team</h1>
            <h2 className='text-xl text-gray-500 font-serif '>Meet the people behind the PTSC</h2>
        </div>
        <div className='w-full h-min flex justify-center items-center flex-wrap gap-4 mt-16 mb-16'>
            <TeamCard Name="Gaurpad Shukla" Position="Secretary" Image="https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png"/>
            <TeamCard Name="Abcdbf" Position="Secretary" Image="https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png"/>
            <TeamCard Name="Abcdbf" Position="Secretary" Image="https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png"/>
            <TeamCard Name="Abcdbf" Position="Secretary" Image="https://static.vecteezy.com/system/resources/previews/024/983/914/non_2x/simple-user-default-icon-free-png.png"/>
        </div>
    </div>
  )
}

export default Team
