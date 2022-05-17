import React from 'react'
import SideBar from '../../components/SideBar'
import styled, { useTheme } from 'styled-components'
import tw from 'tailwind-styled-components'



const BoxDinamic = ({color}) => {

    const classNameEx = `bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-xl`

    const BoxTw = tw.div`
        ${p => p.$primary ? "bg-purple-500" : "bg-purple-500"}
        hover:bg-cyan-600
        rounded-lg
        py-8
        my-3
        shadow-xl
    `

    return (
        <>
        <div className={classNameEx}>
            <div className="h-24 py-8 my-3"></div>
        </div>
        <BoxTw $primary={false}/>
        </>
        )
  }



export default function Home() {

    // Rodar cores de forma global
    const theme = useTheme()
    const primary = theme.colors.primary
    const secondary = theme.colors.secondary
    const tertiary = theme.colors.tertiary

    const [isOpen, setIsOpen] = React.useState(false);


    return (
        <>
        <SideBar>
            <header className="flex justify-between p-4">
                <h1 className="font-medium">Example of a drawer</h1>
            </header>
            <section className="flex space-x-6 m-4">
                <div className="text-6xl">{"🦙"}</div>
                <div className="text-6xl">{"🐝"}</div>
                <div className="text-6xl">{"🦄"}</div>
                <div className="text-6xl">{"🐌"}</div>
            </section>
            <p className="m-4">
                This is an implementation of a drawer using tailwindcss.
            </p>
            <p className="m-4 bg-yellow-100 p-6 text-yellow-900 border border-dashed border-yellow-400">
                Follow me at Twitter{" "}
                <a className="text-blue-600" href="https://twitter.com/@Cuadraman">
                @Cuadraman
                </a>{" "}
                for more tips
            </p>
            <div className="pl-8">
                <h3><a href="/">Voltar</a></h3>
                <BoxDinamic color={primary}/>
                <BoxDinamic color={primary}/>
                <BoxDinamic color={primary}/>
                <BoxDinamic color={primary}/>
                <BoxDinamic color={primary}/>

            </div>
        </SideBar>
        </>
        
    )
}
