import { Code, Rocket, Target ,FileText } from 'lucide-react'
import React from 'react'

const Service = () => {
    const serviceCard=[
        { 
            logo: Target,
            name:"Career Development",
            desc:"Personalized strategies to navigate the modern job market.",
            bg:'bg-green-500/20',
            color:'text-green-500',
        },
        { 
            logo: FileText,
            name:"Resume Audits",
            desc:"Optimization to beat the ATS and get you noticed.",
            bg:'bg-blue-500/20',
            color:'text-blue-500',
        },
        { 
            logo: Code,
            name:"IT Architecture",
            desc:"Expert consulting for scalable infrastructure setup.",
            bg: 'bg-purple-500/20',
            color:'text-purple-500',
        },
        { 
            logo: Rocket,
            name:"Brand Strategy",
            desc:"Storytelling that drives conversion and engagement.",
            bg:'bg-orange-500/20',
            color:'text-orange-500',
        },
    ]
  return (
    <div className='px-6 py-24 relative overflow-hidden'>
        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-green-500/5 blur-[150px] z-10'></div>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-20'>
                <h2 className='text-4xl md:text-5xl font-extrabold mb-6'>Expert <span className='bg-clip-text text-transparent bg-linear-to-r from-green-400 to-lime-300'>
                    Consultancy
                    </span></h2>
                <p className='text-gray-400 max-w-2xl mx-auto'>High-impact solutions for individuals and organizations designed to accelerate growth.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4'>
                {serviceCard.map((item , id) =>{
                   return   <div key={id} className='glass-card p-8 rounded-3xl text-center'>
                        <div className={`w-14 h-14 ${item.bg} ${item.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                            <item.logo/>
                        </div>
                        <h3 className='font-bold mb-3'>
                            {item.name}
                        </h3>
                        <p className='text-sm text-gray-500 leading-relaxed'>{item.desc}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
} 
export default Service
