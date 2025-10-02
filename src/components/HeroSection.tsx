// import React from 'react'
import { Users } from 'lucide-react';
const HeroSection = () => {
  return (
    <section className="flex flex-col tems-center justify-between  my-20 space-y-8 ">
        <div className="  flex justify-center  font-black">
            <Users className="text-center" size={128}/>
        </div>
        <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6">
                Discover Your Academic <br /> Future with UNIverse
            </h1>
        </div>
        <div className='flex justify-center items-center'>
            <button className=" bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-neutral-200  hover:text-blue-500 transition hover:scale-110 duration-300">
            Get Started
        </button>
        </div>

    </section>
  )
}

export default HeroSection