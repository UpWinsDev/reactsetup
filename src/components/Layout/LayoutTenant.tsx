import { useState } from "react";
import React from 'react'
import styled, { useTheme } from 'styled-components'

import ImgLogo from '../ImgLogo'

interface Props {
    children: React.ReactNode
}



const LayoutTenant = ({children}:Props) => {

         // Rodar cores de forma global
    const theme = useTheme()
    const primary = theme.colors.primary
    const secondary = theme.colors.secondary
    const tertiary = theme.colors.tertiary


  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Home", src: "Chart_fill"},
    { title: "Inbox", src: "Chat" },
    { title: "Agendar", src: "agendar", gap: true },
    { title: "Prontuário ", src: "prontuario" },
    { title: "Reservas", src: "Search" },
    { title: "Pacientes", src: "Chart" },
    { title: "Consultas ", src: "Folder", gap: true },
    { title: "Perfil", src: "Setting" },
  ];

  return (
    <div className="flex">
      <div className={` ${open ? "w-48" : "w-16 "} bg-[${primary}] h-screen p-3 pt-5 relative duration-300`}>



        <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setOpen(!open)} className={`absolute cursor-pointer -right-3 top-9 w-7 bg-white border-blue-900
                        border-2 rounded-full  ${!open && "rotate-180"}`} viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
        </svg>
        <div className="flex gap-x-4 p-2 items-center">

        </div>
        <ul className="pt-6">

        </ul>
      </div>
      <div className="h-screen bg-white overflow-y-auto flex-1">
        {children}
      </div>
    </div>
  );
};
export default LayoutTenant

