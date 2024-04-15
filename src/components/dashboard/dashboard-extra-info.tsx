'use client'

import DashboardListItem from "./dashboard-list-item"

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
    // JSX ----------------------------------->
    return (
        <div className="w-full rounded-lg p-4 mt-6 bg-gray-500 hover:bg-zinc-800">
            <span className="text-2xl font-bold">🍃Air Condition</span>
            <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-10 gap-y-10 font-bold">
                {DashboardListItem('Real Feel', `${current.feelslike_c === undefined ? current.feelslike_f : current.feelslike_c} º`, '🌎')}
                {DashboardListItem('Wind', `${current.wind_kph} km/h`, '🍃')}
                {DashboardListItem('Clouds', `${current.cloud} %`, '☁️')}
                {DashboardListItem('Precipitation MM', `${current.precip_mm} MM`, '⛈️')}                                
            </div>
        </div>
    )
}