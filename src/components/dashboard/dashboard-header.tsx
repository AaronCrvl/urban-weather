'use client'
import { useState, useEffect } from "react"
import { DefineIcon } from "../utils/image-handler"
import Image from "next/image"
import { Current } from "@/types/Current"
import { Location } from "@/types/Location"

type DashboardHeaderProps = {
    current : Current,
    location : Location
}

export default function DashboardHeader({current, location} : DashboardHeaderProps) {
    // Hooks ----------------------------------->
    const [icon, setIcon] = useState<string>(require('../../assets/weather-icons/sunny.png'))
    useEffect(()=> {if (icon === undefined && current) DefineIcon(current.temp_c!)}, [icon, current])    

    // Jsx ----------------------------------->
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