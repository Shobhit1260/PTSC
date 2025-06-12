import React from 'react'

function TeamCard({Name, Position, Image}) {
  return (
    <div className='w-1/3 h-min bg-white shadow-lg rounded-lg p-16 m-8  flex flex-col items-center justify-center gap-4'>
        <div className='w-32 h-32 rounded-full overflow-hidden shadow-lg'>
            <img src={Image} alt=""  />
        </div>
        <h1 className='text-black font-bold text-2xl'>{Name}</h1>
        <h2 className='text-gray-500 text-xl'>{Position}</h2>
    </div>
  )
}

export default TeamCard
