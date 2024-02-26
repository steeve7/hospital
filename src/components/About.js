import React from 'react'
import { BiBody } from "react-icons/bi";
import { FaHospitalUser } from "react-icons/fa6";
import { FaDollarSign } from "react-icons/fa";
import { MdOutlineFlight } from "react-icons/md";
import line from './line';

function About() {
    const lists = [ 
        {
            icons: <BiBody />,
            title: 'center for international Patient',
            desc: 'Our team will be providing you with assistance all along your journey.'
        },
        {
            icons: <FaHospitalUser />,
            title: 'Get a Quotation',
            desc: 'Wondering how much would it cost for your required treatment? Ask us'
        },
        {
            icons: <FaDollarSign />,
            title: 'Compare Prices',
            desc: 'Check out the price comparison by countries for several procedures.'
        },
        {
            icons: <MdOutlineFlight />,
            title: 'Plan Your Visit',
            desc: 'It is our purpose to ease and assist you throughout every step of the journey.'
        },
    ]
  return (
    <section className='bg-white text-black mb-10 w-full'>
        <div className='flex justify-center items-center w-full'>
            <div>
                <line />
                <h1 className='font-bold text-[18px] uppercase md:mt-20 mt-8'>Shortcut</h1>
            </div>
        </div>
       <div className='flex flex-col md:flex-row justify-around mx-10 flex-nowrap mt-[-30px]'> 
        {lists.map((list, i) => (
            <div key={i} className='mt-20'> 
            <div className='flex justify-center items-center flex-col'> 
               <p className='mb-5 text-[50px] border-2 rounded-full p-4 border-orange-500 text-orange-500 hover:text-white hover:bg-red-500 transition duration-700 ease-in-out'>{list.icons}</p>
               <h2 className='text-[12px]'>{list.title}</h2> 
               <p className='text-[14px] md:w-[80%] text-center w-full'>{list.desc}</p>
            </div>    
                
            </div>
        ))}
        </div> 
    </section>
    
  )
}

export default About