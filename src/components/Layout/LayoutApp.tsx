import { useState } from "react";
import React from 'react'

import ImgLogo from '../ImgLogo'

interface Props {
    children: React.ReactNode
}


const NavBar = () => {
    return(
          <nav className="bg-white border border-gray-900 px-2 sm:px-4 py-2.5 rounded white:bg-gray-800">
            <div className="container flex flex-wrap justify-between items-center mx-auto">
                <a href="https://flowbite.com" className="flex items-center">
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-dark">Bem vindo Plataforma Soultech</span>
                </a>
                <div className="flex items-center md:order-2">
                    <button type="button" className="flex mr-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="dropdown">
                    <span className="sr-only">Open user menu</span>
                    <img className="w-8 h-8 rounded-full" src="https://www.shareicon.net/data/2016/04/10/747362_people_512x512.png" alt="user photo" />
                    </button>
                    <div className="hidden z-50 my-4 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600" id="dropdown" data-popper-reference-hidden data-popper-escaped data-popper-placement="top" style={{position: 'absolute', inset: 'auto auto 0px 0px', margin: '0px', transform: 'translate(1246px, 783px)'}}>
                    <div className="py-3 px-4">
                        <span className="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span className="block text-sm font-medium text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul className="py-1" aria-labelledby="dropdown">
                        <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                        <a href="#" className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                    </div>
                    <button data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                    <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                    </button>
                </div>
                <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                    <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}


const LayoutApp = ({children}:Props) => {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "home"},
    { title: "Agendar", src: "agendar", gap: true },
    { title: "Prontuários", src: "prontuarios" },
    { title: "Pacientes", src: "pacientes" },
    { title: "Consultas ", src: "consultas", gap: true },
    { title: "Sair", src: "213321" },
  ];

  return (
    <div className="flex">

      <div className={` ${open ? "w-48" : "w-16 "} bg-blue-900 h-screen p-3 pt-5 relative duration-200`}>



        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white border-blue-900
                        border-2 rounded-full  ${!open && "rotate-180"}`} viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div className="flex gap-x-4 p-2 items-center">



            <div className={`w-auto mx-auto sm:h-10 cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} style={{ width: '150px', height:'50px'}}>
                <ImgLogo height={50}/>
            </div>

        </div>
        <ul className="pt-3">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex hover:bg-blue-800 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>

              <a href={'/'+Menu.src} className={`${!open && "hidden"} origin-left duration-700`}>
                {Menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen bg-white overflow-y-auto flex-1 p-6">
        <NavBar/>
        {children}
      </div>
    </div>
  );
};
export default LayoutApp
