import React from 'react'
import treatment1 from '../components/Assets/1.jpg';
import treatment2 from '../components/Assets/2.jpg';
import treatment3 from '../components/Assets/3.jpg';
import treatment4 from '../components/Assets/4.jpg';
import treatment5 from '../components/Assets/5.jpg';
import treatment6 from '../components/Assets/6.jpg';
import Image from "next/image";

export default function department() {
    const departments = [
        {
            image: treatment1,
            info: "No matter what, challenges may be overcome",
            title: "Comprehensive Transplant Center",
            desc: "With developed infrastructure facilities and dedicated transplant teams, our Comprehensive Transplantation Center (CTC) is one of leading reference centers in Europe for international patients in solid organ, and bone marrow transplantations.",
            // button: "Find out more"
        },
        {
            image: treatment2,
            info: "Personalised medicine saves lives…",
            title: "Comprehensive Transplant Center",
            desc: "At the Comprehensive Oncology Center (COC), our motto is to provide “right treatment to the right patient”. Based on multidisciplinary approach, and recent scientific literature, we provide a seamless patient and disease management at our center.",
            // button: "Find out more"
        },
        {
            image: treatment3,
            info: "First described, innovative approaches",
            title: "Spine Center & Orthopedics",
            desc: "We treat childhood and adulthood scoliosis, lumbar and neck hernias, spine fractures and dislocations, infections, tumors, lumbar shifts (spondylolissis) and degenerative spine problems are according to recent scientific advancements.",
            // button: "Find out more"
        },
        {
            image: treatment4,
            info: "Getting back to daily routines is now easy!",
            title: "Robotic Surgery",
            desc: "Robotic Surgery, named as “minimally invasive surgery” and new surgical current of our time, provides necessary surgery with minimal damage to surrounding tissues, and organs. This is not only important for patient, but also for treatment success, and fast recovery after surgery.",
            // button: "Find out more"
        },
        {
            image: treatment5,
            info: "We care for your beloved ones!",
            title: "Heart Center",
            desc: "At the Heart Center, minimally invasive and robotic surgery are successfully performed on pediatric and adult patients with different cardiovascular diseases for more than 30 years. Our Center is also recognized as a Center of Excellence internationally.",
            // button: "Find out more"
        },
        {
            image: treatment6,
            title: "Make an Appointment",
            button: "Contact Us"
        },
    ] 
  return (
    <div className='grid md:grid-cols-3 grid-cols-1 mt-20 w-full' id='treatment'>
        {departments.map((trt, i) => (
            <div key={i} className='flex flex-col justify-betweeen text-white items-center bg-red-500 border border-gray-200'>
                {/* <div className=" bg-cover bg-center bg-no-repeat" style={{backgroundImage:trt.image}}></div> */}
                <div className="w-full">
                   <Image src={trt.image} className="object-cover h-[300px] w-full" alt='departmentmage'/> 
                </div>
                <div className='py-10'>
                    <p className='md:ext-[15px] text-[10px] font-bold px-10 py-3'>{trt.info}</p>
                    <h2 className='md:text-[25px] text-[15px] font-bold px-10'>{trt.title}</h2>
                    <p className='md:text-[15px] text-[10px] px-10 py-10'>{trt.desc}</p>
                    {trt.button && (
                        <div className='flex justify-center md:px-10 items-center'>
                            <a href='#appointment' className=' bg-white border-white p-3 text-black rounded-full w-1/2 text-center font-bold md:text-[15px] text-[10px]'>
                                {trt.button}
                            </a>
                    </div>
                    )}
                    
                </div>
            </div>
        ))}
    </div>
  )
}