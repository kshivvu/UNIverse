// import React from 'react'
import { Lightbulb } from 'lucide-react';
import { ListTodo } from 'lucide-react';
import { Star } from 'lucide-react';
const BanItems=[
    {
        icon:<Lightbulb size={64}/>,
        heading:"Informed Choices",
        desc:"Make Educated decisions about your education"
    },
    {
        icon:<ListTodo size={64} />,
        heading:"Simple Steps",
        desc:"Follow our easy process to connect"
    },
    {
        icon:<Star size={64}  />,
        heading:"Unique Features",
        desc:"Explore various tools for your success"
    },
]


const BlueBanner = () => {
  return <div className="w-full bg-blue-500 px-16 py-8 mb-16 flex justify-between items-center">
    
    {BanItems.map((items, index)=>(
        <div key={index} className="flex justify-between items-center">
            {items.icon}
            <div className='ml-4 '>
                <p className='font-bold text-lg '>{items.heading}</p>
                <p className='mt-1 max-w-64 text-sm'>
                    {items.desc}
                </p>
            </div>
        </div>
        

    ))}
  </div>;
};

export default BlueBanner;
