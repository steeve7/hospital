import Link from 'next/link'
import React from 'react'
import { FaFacebook,FaWhatsapp, FaInstagram, FaYoutube, FaWordpress, FaArrowPointer} from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-red-500 w-full'>
        <div className='bg-white md:py-7 py-0 w-[90%] m-auto shadow-lg'>
            <div className='flex flex-col md:flex-row justify-between mt-10 gap-20 px-20 items-center'>
            <h1 className='md:text-[20px] text-[15px] font-bold'>Global reference in <b className='text-red-500 font-bold'>healthcare</b></h1>
            <div className='md:text-[15px] text-[10px] text-red-500 md:mb-0 mb-2'>
                <h1>Fatih, 1114. Sk. No:3, 09020 Aydın Merkez/Aydın, Türkiye</h1>
            </div>
        </div>
        </div>
        
        <div className='flex justify-between items-center w-full px-20 md:py-10 py-5 text-white' id='home'>
            <hi className="front-bold md:text-[20px] text-[15px] font-[monospace] md:m-0 m-auto">Aydin Ashi KKM</hi>
            <a href='#home' className='text-[20px] flex items-center cursor-pointer md:flex hidden'>Back to the top <FaArrowPointer /></a>
        </div>
    </div>
  )
}

export default Footer