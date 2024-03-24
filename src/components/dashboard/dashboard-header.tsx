'use client'

import useScale from "@/hooks/useScale"
import { Fragment } from "react"
import Image from "next/image"
import { Current } from "@/types/Objects/Current"
import { Location } from "@/types/Objects/Location"
import { GetCountryFlagCode } from "../../analytics/image-handler"

type DashboardHeaderProps = {
    current : Current,
    location : Location
}

export default function DashboardHeader({current, location} : DashboardHeaderProps) {
    // Hooks ----------------------------------->    
    const scale = useScale()

    // Jsx ----------------------------------->
    return (                    
        <div className="flex gap-48">
            <div className="list-group gap-y-2 text-6xl font-bold text-left">
                <div className="flex">
                    {/* Country Flag */}
                    {GetCountryFlagCode(location.country) === '' ?
                        <Fragment />
                        :
                        <img 
                            alt="Country Flag" 
                            loading="lazy" 
                            width={120} height={48} 
                            src={GetCountryFlagCode(location.country)} 
                        />
                    }                
                    <span className="w-auto flex ml-6">{location.name + "-" + location.region}</span>                             
                </div>
                <span 
                    className="flex mt-4"
                >
                    {scale.includes('Cº') ? `${current.temp_c} C` : `${current.temp_f} F`} º
                </span>                       
                <span 
                    className="mt-4 text-2xl flex"
                >
                    Feelslike: {scale.includes('Cº') ? `${current.feelslike_c} C` : `${current.feelslike_f} F`} º
                </span> 
            </div>

            {/* Weather Icon */}
            <img 
                alt="weather-icon" 
                src={current.condition.icon} 
                width={260} height={260}
            />    

            {/* Last Update */}
            <span 
                className="text-xl text-white font-bold text-right"
            >
                Last Update: {current.last_updated}
            </span>          
        </div>        
    )
}