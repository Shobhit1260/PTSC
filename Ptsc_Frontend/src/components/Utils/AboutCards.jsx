import React from 'react'

function AboutCards({title,description}) {
  return (
    <div className='w-11/12 h-min bg-white shadow-lg rounded-lg p-8 mt-8  mx-8 flex flex-col justify-center items-start gap-4'>
        <h1 className='font-bold text-black text-2xl'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default AboutCards
