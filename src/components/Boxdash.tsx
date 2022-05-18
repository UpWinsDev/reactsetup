import React from 'react'

interface Props {
    children: React.ReactNode
}

const Boxdash = ({children}:Props) => {

    let ThemeColors = `bg-white text-blue-900 border-gray-200 border`
    let dark = false

    if(dark){
        ThemeColors = `bg-slate-800 text-gray-200 border-slate-200`
    }

    return (
        <div className={`shadow-md ${ThemeColors} rounded-lg m-2 py-4 px-4 sm:px-3 lg:px-5`}>
            <div>{children}</div>
        </div>

    )
 }

export default Boxdash
