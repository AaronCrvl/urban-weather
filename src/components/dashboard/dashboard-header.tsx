'use client'
import { useState, useEffect } from "react"
import { DefineWeatherIcon } from "../../analytics/image-handler"
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
    const [icon, setIcon] = useState<string>(require('../../assets/weather-icons/sunny.png'))
    useEffect(()=> {if (icon === undefined && current) DefineWeatherIcon(current.temp_c!)}, [icon, current])    

    // Jsx ----------------------------------->
    return (
        <div className="text-4xl">            
            <div className="flex gap-48">
                <div>
                    {/* <Image alt="Country Flag" loading="lazy" width={15} height={15} src={GetCountryFlagCode(location.country)} />*/}
                    <span className="flex font-bold">{location.name + "-" + location.region}</span>             
                    <span className="text-6xl font-bold text-left">{current.temp_c}º</span>    
                </div>
                <Image alt="weather-icon" src={icon} width={260} height={260}/>            
            </div>
        </div>
    )
}