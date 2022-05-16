import Link from 'next/link'
import React from 'react'
import CloseSvg from './icons/CloseSvg'
import Navbar from './Navbar'

const SideBar = ({ children }) => {

    return (
        <div className="drawer">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <Navbar />
                {children}
            </div>
            
            <div className="drawer-side">
                <label htmlFor="my-drawer" className="drawer-overlay"></label>
                <ul
                    className={`menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content`}
                >
                    <label
                        htmlFor="my-drawer"
                        className="btn ml-auto w-100 sm:hidden flex justify-end"
                    >
                        <CloseSvg />
                    </label>
                    <li>
                        <Link href="/prontuarios">
                            <a>Prontuarios</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/pacientes">
                            <a>Pacientes</a>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar
