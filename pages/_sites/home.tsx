import React from 'react'
import getConfig from 'next/config'
import SideBar from '../../src/components/SideBar'
import Navbar from '../../src/components/Navbar'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Home() {
    // const { locales, locale, defaultLocale } = useRouter()

    // const { publicRuntimeConfig } = getConfig()
    // console.log(locale)

    return (
        <SideBar
            children={
                <div className="flex justify-center items-center mt-96">
                    <div className="row ">
                        <div className="col-md-12 flex">
                            <div className="col-md-4 mr-2">
                                <Link href="/agendar">
                                    <a className="btn btn-primary">Agendar</a>
                                </Link>
                            </div>
                            <div className="col-md-6">
                                <Link href="/consultas">
                                    <a className="btn text-white bg-slate-600 hover:bg-red-900 hover:border-red-900">
                                        Consultas
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        />
    )
}
