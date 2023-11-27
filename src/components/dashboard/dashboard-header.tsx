'use client'

import { useState, useEffect } from "react"
import Image from "next/image"

type DashboardHeaderProps = {
    current : CurrentMin,
    location : LocationMin
}

type CurrentMin = {
    temp_c : string,   
}

type LocationMin = {
    name:string,
    region: string,
    country: string,
}

export default function DashboardHeader({current, location} : DashboardHeaderProps) {
    // Hooks ----------------------------------->
    const [icon, setIcon] = useState<string>(require('../../assets/weather-icons/sunny.png'))
    useEffect(()=> {if (icon === undefined && current) DefineIcon(parseInt(current.temp_c))}, [icon, current])

    // Functions ----------------------------------->
    function DefineIcon (num : number) {        
        if (num > 5 && num <= 10) setIcon(require('../../assets/weather-icons/snowy.png'))
        else if (num > 10 && num <= 14) setIcon(require('../../assets/weather-icons/sunny-cloudy.png'))
        else if (num >= 15 && num <= 20) setIcon(require('../../assets/weather-icons/sunny-cloudy.png'))
        else if (num >= 21 && num <= 27) setIcon(require('../../assets/weather-icons/sunny.png'))
        else if (num >= 28 && num <= 40) setIcon(require('../../assets/weather-icons/sunny.png'))        
    }

    // JSX ----------------------------------->
    return (
        <div className="text-4xl">            
            <div className="flex gap-48">
                <div>
                    <span className="flex font-bold">{location.name + "-" + location.region}</span>            
                    <span className="text-6xl font-bold text-left">{current.temp_c}º</span>    
                </div>
                <Image alt="weather-icon" src={icon} width={260} height={260}/>            
            </div>
        </div>
    )
}