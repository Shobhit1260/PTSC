import React from 'react'
import AboutCards from '../Utils/AboutCards';

function About() {
  return (
    <div className='w-full h-min bg-gradient-to-b from-blue-200 to-white p-24'>
        <div className=' flex flex-col gap-8 mb-16'>
              <h1 className='text-center text-4xl font-bold font-serif'>About PTSC</h1>
              <h2 className='text-center text-xl text-gray-500 font-serif'>Fostering Excellence and technical innovation</h2>
        </div>
        <AboutCards title="OurStory" description="The Programming and Tech Skill Club was founded in 2015 by a group of passionate individuals who shared a common love for coding and technology. What started as a small meetup in a classroom has now grown into a vibrant community of 50 students, professionals, and enthusiasts from various backgrounds and skill levels.
"/>
        <AboutCards title="Our Mission" description="Our mission is to empower individuals with the skills and knowledge needed to thrive in the ever-evolving world of technology. We believe that by fostering a culture of learning, collaboration, and innovation, we can help our members reach their full potential and make a positive impact in the tech industry."/>
        <AboutCards title="Our Vision" description="We envision a future where everyone has access to quality education and resources in programming and technology. We strive to create an inclusive environment that encourages creativity, critical thinking, and problem-solving skills, enabling our members to become leaders in their respective fields."/>
    </div>
  ) 
}

export default About
