'use client'
import React from 'react'
import About1 from '..//components/Assets/aboutimage.jpeg';
import About2 from '..//components/Assets/aboutimage2.jpeg';
import About3 from '..//components/Assets/aboutimage3.jpeg';
import Image from 'next/image'
import { motion} from 'framer-motion';

function Aboutpage() {
  const Abouts = [
    {
        image: About1,
    },
    {
        image: About2,
    },
    {
        image: About3,
    },
] 



  return (
    <div  className="flex flex-col justify-between md:px-10 px-10 mt-14 items-center w-full" id='about'>
      <div className="flex flex-col justify-center w-full mt-6 gap-4 px-10 font-normal">
        <p className=''>Aydin Ashi KKM entered into service in 2009 to render healthcare services for the patients in Aydin and neighbouring cities. We have an international JCI quality accreditation.</p>
        <p>Providing diagnostic and therapeutic services in various branches in the field of cancer, Aydin Ashi KKM comprises Pediatric Bone Marrow Transplantation Center, Pediatric Oncology, Pediatric Hematology and Medical Oncology units.</p>
        <p>We have contracted with many private health insurance companies and offers services in Emergency Medicine, Cardiology, Bone Marrow Transplantation, CVS, Radiation Oncology and Medical Oncology branches within the scope of SGK coverage.</p>
        <h6 className='font-bold mb-[-10px] text-orange-400'>Indoor Area of 22,000m²</h6>
          <p>In the indoor area of 22,000 m² where the hospital was founded, services are rendered with capacity of 105 beds, 6 operating theatres and 28 intensive care beds. CVS and neonatal intensive care units are also available.</p>
        <h5 className='font-bold mb-[-10px] text-orange-400'>Medical Departments</h5>
          <p>Providing diagnostic and therapeutic services in the field of cancer, Aydin Ashi KKM comprises Pediatric Bone Marrow Transplantation Center, Pediatric Oncology, Pediatric Hematology and Medical Oncology units. The hospital includes In Vitro Fertilization Center, Obesity, Cardiology and Cardiovascular Surgery, Breast Health, Perinatology units and Cosmetic Dermatology services are also provided.</p>

      </div>
      <div className="flex flex-wrap justify-around md:w-[100%] mt-10 w-full">
        {Abouts.map((about, i) => (
          <div
            key={i}
            className="mb-6 rounded-lg w-[40% md:w-[26%]"
          >
            <Image src={about.image} alt="images" className="w-[350px]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Aboutpage