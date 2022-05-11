import React from 'react'
import SideBar from '../../components/SideBar'


export default function Home() {


    return (
        <SideBar
            children={
                <div className="h-screen gb-grey-50 flex justify-center grid-rows-2">
   
                    <div className="w-full max-w-screen-lg grid grid-cols-1 border md:grid-cols-6 gap-x-5 md:max-w-2xl">
                        <div className="...">
                            <div className="bg-white rounded-lg shadow-xl">
                                <div className="h-24"></div>
                                
                            </div>
                        </div>
                        <div className="...">
                            <div className="bg-white rounded-lg shadow-xl">
                                <div className="h-24"></div>
                            </div>
                        </div>   
                        <div className="...">
                            <div className="bg-white rounded-lg shadow-xl">
                                <div className="h-24"></div>
                            </div>
                        </div>  
                        <div className="...">
                            <div className="bg-white rounded-lg shadow-xl">
                                <div className="h-24"></div>
                            </div>
                        </div> 
                    </div>
                </div>
            }
        />
    )
}
