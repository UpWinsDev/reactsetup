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
        shadow-xl
    `

    return (
        <>
        <div className={classNameEx}>
            <div className="h-24"></div>
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


    return (
        <SideBar
            children={
                <div className=" bg-grey-50 flex justify-center grid-rows-2">

                    <div className="w-full max-w-screen-lg grid grid-cols-1 border md:grid-cols-6 gap-x-5 gap-y-2 md:max-w-2xl">
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>
                        <BoxDinamic color={primary}/>

                    </div>
                </div>
            }
        />
    )
}
