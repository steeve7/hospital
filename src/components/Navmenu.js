"use client";
import React, {useEffect, useState} from "react"
import Link from "next/link";
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';

const menus = [
  {id: '/', label: 'Home'},
  {id: '#about', label: 'About Us'},
  {id:'#treatment', label: 'Treatment'},
  {id: '#doctors', label: 'Doctors'},
  {id: '#appointment', label: 'Make an Appointment'},
]

export default function Navmenu(){

// const {toggleMenu, setToggleMenu} = useState(false)
const [menuSlide, setMenuSlide] = useState(false);
const [navbar, setNavbar] = useState(false);

const changeBackground = () => {
  if(window.scrollY >= 80){
    setNavbar(true);
  } else {
    setNavbar(false);
  }
};

useEffect(() => {
  window.addEventListener("scroll", changeBackground)
});

    return(
    <div className={`fixed w-full top-0 z-10 ${navbar ? "bg-white shadow-md" : 'bg-transparent'}`}> 
        <div className="flex justify-between md:py-7 py-4 md:px-20 px-7 bg-white">
      <h1 className="uppercase font-bold md:text-[18px] text-[14px] flex items-center justify-start gap-2 text-orange-400"> 
        <a href="/">Aydin Ashi KKM</a>
      </h1>
      <div className="justify-center gap-6 items-center lg:flex flex-row hidden text-black">
        {menus.map((menu, i) => (
          <div key={i}>
            <Link href={menu.id}>{menu.label}</Link>
          </div>
        ))}
      </div>
      <div className="lg:hidden relative flex">
        {menuSlide ? (
          <RiCloseLine
            size={20}
            style={{ color: "red" }}            
            onClick={() => setMenuSlide(false)}
            className="cursor-pointer"
          />
        ) : (
          <RiMenu3Line
            size={20}
            style={{ color: "red" }}
            onClick={() => setMenuSlide(true)}
            className="cursor-pointer"
          />
        )}
        {menuSlide && (
          <div
            className="flex justify-end items-end flex-col text-end bg-red-500 p-[2rem] 
          absolute md:top-[40px] top-[20px] right-0 mt-[1rem] min-w-[250px] rounded-[5px] scale-up-center"
          >
            <div className="">
              {menus.map((menu, i) => (
                <p key={i} className="text-white font_family py-[1rem] px-0">
                  <a href={menu.id} onClick={() => setMenuSlide(false)}>{menu.label}</a>
                </p>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    </div>
  
    )
}