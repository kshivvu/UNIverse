// import React from 'react'
import { Landmark } from 'lucide-react';
import { GraduationCap } from 'lucide-react';
import { Globe } from 'lucide-react';
import { MessageCircleMore } from 'lucide-react';
import { BotMessageSquare } from 'lucide-react';
import { Briefcase } from 'lucide-react';
const Cards=[
    {
        icon:<Landmark className='text-blue-500 font-black- ' />,
        head:"College Profiles",
        Desc:"Access Detailed Profiles of colleges including courses ,  ratings and reviews"
    },
    {
        icon:<GraduationCap className='text-blue-500 font-extrabold' />,
        head:"Student",
        Desc:"Create and manage your own Student profile to showcase achievements"
    },
    {
        icon:<Globe className='text-blue-500 font-extrabold' />,
        head:"Explore Profiles",
        Desc:"Explore profiles of peers and connect with like minded individuals"
    },
    {
        icon:< MessageCircleMore className='text-blue-500 font-extrabold' />,
        head:"Social Media Feed",
        Desc:"Stay updated with the latest news and trends in the education sector"
    },
    {
        icon:< BotMessageSquare className='text-blue-500 font-extrabold' />,
        head:"AI College Match ",
        Desc:"Get personalized college recommendation using AI technology"

    },
    {
        icon:<Briefcase className='text-blue-500 font-extrabold' />,
        head:"Opportunities Hub",
        Desc:"Discover internships , scholarships, and job opportunities tailored for you"
    }
]
const Features = () => {
  return (
    <div className="mt-5 mb-20 ">
        <h1 className="text-center font-extrabold text-2xl mb-12">Core Features</h1>
        <div className='flex flex-wrap justify-center items-center space-x-4 '>
            {Cards.map((card, index)=>(
            <div key={index} className="min-w-64 p-3 shadow-lg flex flex-col space-y-3 mb-12 hover:bg-neutral-600  hover:scale-105 transition duration-500  ease-in-out">
                <div className='flex justify-center items-center'>
                    {card.icon}
                </div>
                <div><p className='text-center font-bold'>{card.head}</p></div>
                
                <div><p className='text-center w-full  text-sm mb-2 max-w-64'>{card.Desc}</p></div>
            </div>
        ))}
        </div>
    </div>
  )
}

export default Features