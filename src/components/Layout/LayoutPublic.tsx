import { useState } from "react";
import React from 'react'

import ImgLogo from '../ImgLogo'

interface Props {
    children: React.ReactNode
}



const LayoutPublic = ({children}:Props) => {



  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "home"},
    { title: "Inbox", src: "Chat" },
    { title: "Agendar", src: "agendar", gap: true },
    { title: "Prontuários", src: "prontuarios" },
    { title: "Pacientes", src: "pacientes" },
    { title: "Consultas ", src: "consultas", gap: true },
    { title: "Sair", src: "Setting" },
  ];

  return (
    <div className="flex">

      <div className={` ${open ? "w-48" : "w-16 "} bg-blue-900 h-screen p-3 pt-5 relative duration-300`}>



        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white border-blue-900
                        border-2 rounded-full  ${!open && "rotate-180"}`} viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div className="flex gap-x-4 p-2 items-center">

            {/* <svg xmlns="http://www.w3.org/2000/svg" className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
            </svg> */}
            <ImgLogo  height={250} />

            {/* <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`} />*/}

          {/* <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Soultech
          </h1> */}
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>

              <a href={'/'+Menu.src} className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="h-screen bg-white flex-1 p-7">
        {children}
      </div>
    </div>
  );
};
export default LayoutPublic
