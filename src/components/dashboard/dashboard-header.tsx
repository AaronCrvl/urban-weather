import { useState, useEffect } from "react"

type DashboardHeaderProps = {
    current : CurrentMin,
    location : LocationMin
}

type CurrentMin = {
    temp_c : string,
    precip_in : number,
    precip_mm : number,
    humidity : number,
    cloud: number,
    wind_kph : number,
}

type LocationMin = {
    name:string,
    region: string,
    country: string,
}

export default function DashboardHeader({current, location} : DashboardHeaderProps) {
    // Hooks ----------------------------------->
    const [icon, setIcon] = useState<string>('')
    useEffect(()=> {if (icon === undefined && current) DefineIcon(parseInt(current.temp_c))}, [icon])

    // Functions ----------------------------------->
    function DefineIcon (num : number) {        
        if(num > 5) setIcon('')
        else if (num >= 10 && num <= 14) setIcon('')
        else if (num >= 15 && num <= 20) setIcon('')
        else if (num >= 21 && num <= 27) setIcon('')
        else if (num >= 28 && num <= 40) setIcon('')        
    }

    // JSX ----------------------------------->
    return (
        <div>
            <span className="flex text-xl">{location.name + "-" + location.region}</span>
            <div className="flex gap-48">            
                <span className="text-xl font-bold text-left">{current.temp_c}</span>    
                <img alt="weather-icon" src={icon}/>            
            </div>
        </div>
    )
}