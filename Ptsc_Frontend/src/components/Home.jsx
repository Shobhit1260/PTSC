import React from 'react'
import Navbar from './Navbar';
import CountDown from './Utils/CountDown';
import Gallery from './Utils/Gallery';


function Home() {
  return (
    <div className='w-full h-screen bg-white overflow-x-hidden'>
       <Navbar/>
       {/* hero section */}
       <section>
            <div className='pt-24 bg-gradient-to-b from-blue-500 to-white flex justify-center items-center flex-col gap-4'>
                <h1 className='font-bold text-6xl text-black'>Programming and Technical Skill Club</h1>
                <h2 className='font-bold text-6xl text-cyan-600'>KNIT Sultanpur</h2>
                <h3 className='text-md text-xl text-gray-500'>Empowering students through codes, innovation and technology.</h3>
                <button className='bg-cyan-600 text-white px-4 py-2 text-2xl rounded-lg mt-4'>join us</button>
            </div>
       </section>

       {/* Latest Event */}
       <section>
            <div className="bg-blue-500 w-11/12 h-min shadow-lg rounded-lg mx-auto mt-16 mb-16">
            <div className='flex justify-between items-center h-64'>
                <div className='w-1/2 flex flex-col justify-between items-start p-8 gap-8 font-bold text-white text-2xl'>
                    <div className="">Next Event : Hackathon 2025</div>
                    <div className='w-11/12 text-red-500'><CountDown/> </div>
                </div>
                <div className='w-1/2 h-full'>
                    <img src="" alt="" />
                </div>
             </div>     
            </div>
       </section>
{/* Event Gallery */}
       <section>
           <div className=' m-4 mt-48'>
                    <h1 className='font-bold mx-auto text-center font-serif text-4xl my-8'>Event Gallery</h1>
                  
            <Gallery/>
            
           </div>
       </section>
       
    </div>
  )
}

export default Home
