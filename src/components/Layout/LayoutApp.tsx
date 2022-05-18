import React, { useState } from "react";
import ImgLogo from '../ImgLogo'
import NavBar from '../Navbar'

interface Props {
    children: React.ReactNode
}

export const SvgDocument = ({type}) => {

    switch (type) {
        case "home":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            )
        case "prontuarios":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>
            )
        case "agendar":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            )
        case "pacientes":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        case "consultas":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
            )
        case "sair":
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            )
        default:
            return (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
                </svg>
            )
    }

}

const LayoutApp = ({children}:Props) => {

  const [open, setOpen] = useState(false);
  const Menus = [
    { title: "Home", src: "home", svg: "home"},
    { title: "Agendar", src: "agendar", svg: "agendar", gap: true },
    { title: "Prontuários", src: "prontuarios",svg: "prontuarios" },
    { title: "Pacientes", src: "pacientes", svg: "pacientes" },
    { title: "Consultas ", src: "consultas",svg: "consultas", gap: true },
    { title: "Sair", src: "213321",svg: "sair" },
  ];

  return (
    <div className="flex">

      <div className={` ${open ? "w-48" : "w-16 "} bg-sky-900 h-screen p-4 pt-5 relative duration-200`}>



        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white border-sky-900
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
            <a href={Menu.src}>
                <li
                key={index}
                className={`flex hover:bg-sky-800 rounded-md p-1 cursor-pointer hover:bg-light-white hover:text-sky-50 text-gray-300 text-sm items-center gap-x-4
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                    index === 0 && "bg-light-white"
                } `}
                >

                    <SvgDocument type={Menu.svg}/>

                <span className={`${!open && "hidden"} origin-left duration-700`}>
                    {Menu.title}
                </span>
                </li>
            </a>
          ))}
        </ul>
      </div>
      <div className="h-screen bg-slate-50 overflow-y-auto flex-1 p-4">
        <NavBar/>
        {children}
      </div>
    </div>
  );
};
export default LayoutApp



