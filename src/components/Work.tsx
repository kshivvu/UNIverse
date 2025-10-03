
import { World ,Doorbell3pSharp , UserGraduate } from "./ICONS";

import type { ReactElement } from "react"


interface workType{
    icon:ReactElement,
    head:string,
    desc: string,
}
const work:workType[]=[
    {
        icon:<World className="h-20 w-20 font-extrabold text-blue-500"/>,
        head:"Explore colleges",
        desc: "discover and compare colleges , uncover admission criteria , and find the perfect fit for your academic journey",
    },
    {
        icon:<UserGraduate className="h-20 w-20 font-extrabold text-blue-500"/>,
        head:"Build Your Profile",
        desc: "Craft a comprehensive profile showcasing your strengths and accomplishments to stand out in the competitive landscape.",
    },
    {
        icon:<Doorbell3pSharp className="h-20 w-20 font-extrabold text-blue-500"/>,
        head:"Access Opportunities",
        desc: "Unlock a world of opportunities , from internships to scholarships , tailored to your aspirations and goals.",
    }
]


const Work = () => {
  return (
    <div className="mt-5 px-10 bg-blue-300 pt-8">
        <h1 className="font-extrabold text-4xl text-center mb-12 ">How UNIverse Works</h1>
        <div className="flex justify-between items-start pb-6">
        {work.map((item, index)=>(
            <div key={index} className="w-1/3 h-full mx-auto flex flex-col">
                <div className="flex justify-center mb-5 h-30  
                items-center">
                    {item.icon}
                </div>
                <div className="mb-4 flex justify-center items-center">
                    <h1 className="font-extrabold text-2xl text-center">{item.head}</h1>
                </div>
                <div className="flex justify-center items-center">
                    <p className="text-center" >
                        {item.desc}
                    </p>
                </div>


            </div>
        ))}


        </div>



    </div>
  )
}

export default Work