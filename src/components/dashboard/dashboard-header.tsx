'use client'
import { useState, useEffect } from "react"
import { GetWeatherIcon} from "../../analytics/image-handler"
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
    const [icon, setIcon] = useState<string>('https:' + current.condition.icon)
    
    // Jsx ----------------------------------->
    return (                    
        <div className="flex gap-48">
            <div className="list-group gap-y-2 text-6xl font-bold text-left">
                {/* <Image alt="Country Flag" loading="lazy" width={15} height={15} src={GetCountryFlagCode(location.country)} />*/}
                <span className="flex">{location.name + "-" + location.region}</span>                             
                <span className="flex">{current.temp_c} Cº</span>                       
                <span className="mt-6 text-4xl flex">Feelslike: {current.feelslike_c} º</span> 
            </div>
            <img alt="weather-icon" src={icon} width={260} height={260}/>    
            <span className="text-xl font-bold text-right">Last Update: {current.last_updated}</span>          
        </div>        
    )
}