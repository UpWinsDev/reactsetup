import React from 'react'

interface Props {
    children: React.ReactNode
}

const Boxdash = ({children}:Props) => {

    let dark = false
    let ThemeColors = ''

    if(dark){
        ThemeColors = `dark:bg-slate-900 dark:text-white dark:border-blue-200`
    }

    return (
        <div className={`${ThemeColors} shadow-md bg-white text-blue-900 border-gray-200 border rounded-lg m-2 py-4 px-4 sm:px-3 lg:px-5`}>
            <div>{children}</div>
        </div>

    )
 }

export default Boxdash
