import React from 'react'
import doctor1 from '../components/Assets/1.jpg'
import doctor2 from '../components/Assets/doctor2.jpg'
import doctor3 from '../components/Assets/doctor3.jpg'
import doctor4 from '../components/Assets/doctor4.jpg'
import doctor5 from '../components/Assets/doctor5.jpg'
import doctor6 from '../components/Assets/doctor6.jpg'
import doctor7 from '../components/Assets/doctor7.jpg'
import doctor8 from '../components/Assets/doctor8.jpg'
import doctor9 from '../components/Assets/doctor9.jpg'
import doctor10 from '../components/Assets/doctor10.jpg'
import doctor11 from '../components/Assets/doctor13.jpg'
import doctor12 from '../components/Assets/doctor12.jpg'
import doctor13 from '../components/Assets/doctor.jpg'
import doctor14 from '../components/Assets/doctor14.jpg'
import Image from 'next/image'


function Doctors() {
    const doctors = [
        {
            image: doctor1,
            title: "Aydın Tunçkale, M.D."
        },
        {
            image: doctor2,
            title: "Barış Topçular, M.D."
        },
        {
            image: doctor3,
            title: "Bülent Polat, M.D."
        },
        {
            image: doctor4,
            title: "Cengiz Dibekoğlu, M.D."
        },
        {
            image: doctor5,
            title: "Demet Erciyes, M.D."
        },
        {
            image: doctor6,
            title: "Fatih Atuğ, M.D."
        },
        {
            image: doctor7,
            title: "Meriç Enercan, M.D."
        },
        {
            image: doctor8,
            title: "Özgür Şamilgil, M.D."
        },
        {
            image: doctor9,
            title: "Sinan Kahraman, M.D."
        },
        {
            image: doctor10,
            title: "Nagihan İnan Gürcan, M.D."
        },
        {
            image: doctor11,
            title: "Erkan Kaba, M.D."
        },
        {
            image: doctor12,
            title: "Sadık Server, M.D."
        },
        {
            image: doctor13,
            title: "Ertan Sağbaş, M.D."
        },
        {
            image: doctor14,
            title: "Murat Gülbaran, M.D."
        },
    ]
  return (
    <div className='text-center mt-20 w-full md:px-10' id='doctors'>
        <h1 className='mt-10 md:text-[40px] font-bold mb-6 text-[20px]'>Our Doctors</h1>
        <div className='grid md:grid-cols-4 grid-cols-2'>
        {doctors.map((doctor, i) => (
            <div key={i}>
                <Image src={doctor.image} className='w-full h-full p-6' alt='doctor_image'/>
                <p className='font-bold md:text-[15px] text-[10px]'>{doctor.title}</p>
            </div>
        ))}
        </div>   
    </div>
  )
}

export default Doctors