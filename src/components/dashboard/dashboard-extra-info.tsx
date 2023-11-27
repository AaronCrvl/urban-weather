'use client'

import Image from "next/image"

type DashboardExtraInfoProps = {
    current : CurrentMin
}
 
type CurrentMin = {
    feelslike_c?:number,
    feelslike_f?:number,
    precip_in : number,
    precip_mm : number,
    humidity : number,
    cloud: number,
    wind_kph : number,
}

export default function DashboardExtraInfo({ current } : DashboardExtraInfoProps) {
    // Functions ----------------------------------->
    const ListItem = (caption : string, value : string | number, imageRef : string) => {
        return (
            <div>
                <div className="flex">
                    <span className="text-4xl">{imageRef}</span>
                    {/* <Image alt="item-icon" src={imageRef}  width={32} height={32} /> */}
                    <span className="text-xl">{caption}</span>
                </div>                    
                <span className="text-4xl">{value}</span>
            </div>
        )
    }

    // JSX ----------------------------------->
    return (
        <div className="rounded-lg p-4 mt-6 bg-zinc-900">
            <span className="text-2xl font-bold">Air Condition</span>
            <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-24 gap-y-16 font-bold">
                {ListItem('Real Feel', `${current.feelslike_c === undefined ? current.feelslike_f : current.feelslike_c} º`, '🌎')}
                {ListItem('Wind', `${current.wind_kph} km/h`, '🍃')}
                {ListItem('Clouds', `${current.cloud} %`, '☁️')}
                {ListItem('Precipitation MM', `${current.precip_mm} MM`, '⛈️')}                                
            </div>
        </div>
    )
}