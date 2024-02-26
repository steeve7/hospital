import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa6'

function Tesmonies() {
   const testimonials = [
    {
        icon: <FaQuoteLeft />,
        desc: "When I saw the whole liver transplant team with multidisciplinary approach I was very relaxed. Thank you for giving me a new life!",
        title: "Ahmed Hussain Abdulla Ali",
        neme: "Liver transplant patient"
    },
    {
        icon: <FaQuoteLeft />,
        desc: "We, the Bahraini liver transplant patients, express our sincerest thanks and appreciation to the management of Aydin Ashi KKM and its medical staff, headed by the team leader Barış Topçular",
        title: "M. A. Nabi AlSaikh",
        neme: "Chairman, Friends of Liver Patients Society Bahrain"
    },
    {
        icon: <FaQuoteLeft />,
        desc: "In the UK the doctors told us that my father had a few days to live. Thanks to God he is in here, Aydin Ashi KKM and in very good condition now.",
        title: "Hamza Anwar",
        neme: "Donor for his father’s liver transplant"
    },
   ] 
  return (
    <div className='flex flex-col justify-center bg-red-500 mt-20 text-white w-full'>
        <div className='flex flex-col justify-center text-center mt-10 px-10'> 
            <h2 className='md:text-[20px] text-[10px] font-bold font-[mnospace] uppercase'>A Good Word means a lot</h2>
            <span></span>                                                                           
            <h1 className='md:text-[45px] text-[20px] font-bold uppercase text-white md:mt-0 mt-10'>Patient <b className='text-black'>testimonials</b></h1>
            <p className='w-full md:text-[20px] text-[15px] md:mt-0 mt-8'>It’s our patients’ words that drive us to a better success. Here are a few examples…</p>
        </div>
        <div className='flex flex-col md:flex-row justify-center mt-20 md:px-20 px-10 gap-10'>
            {testimonials.map((testi, i) => (
                <div key={i} className=''> 
                    <div className='flex justify-center w-full'>
                       <p className='mb-3 border-black rounded-full p-3 text-black hover:text-black text-white bg-black transition duration-700 ease-in-out hover:bg-white'>{testi.icon}</p> 
                    </div>
                    <p className='text-center tracking-widest mb-10 w-full text-[15px]'>{testi.desc}</p>
                    <div className='flex flex-col justify-center text-center mb-10'>
                        <p>{testi.title}</p>
                        <p>{testi.neme}</p>
                    </div>
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default Tesmonies