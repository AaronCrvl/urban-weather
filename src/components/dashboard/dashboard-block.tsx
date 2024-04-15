'use client'

import { Forecast } from "@/types/Objects/Forecast"
import DashboardListItem from "./dashboard-list-item"
import { Fragment } from "react"
import { Current } from "@/types/Objects/Current"

type Props = {    
    data : {        
        forecast : Forecast | undefined,
        current : Current | undefined
    },    
    mode : string
}

export default function DashboardBlock({data, mode}  :  Props) {    
    // JSX ----------------------------------->
    return (
        <Fragment>
            {mode === 'astro' ?
                (<div className="w-full rounded-lg p-4 mt-6 bg-gray-500 hover:bg-zinc-800">
                    <span className="text-2xl font-bold">🌠Astro</span>
                    <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-10 gap-y-10 font-bold">
                        {DashboardListItem('Moon Up', `${data.forecast!.forecastday[0].astro.is_moon_up ? 'Yes' : 'No'}`, '🌚')}
                        {DashboardListItem('Sun Up', `${data.forecast!.forecastday[0].astro.is_sun_up ? 'Yes' : 'No'}`, '🌞')}
                        {DashboardListItem('Sun Rise', `${data.forecast!.forecastday[0].astro.sunrise ? 'Yes' : 'No'}`, '🌄')}
                        {DashboardListItem('Moon Phase', `${data.forecast!.forecastday[0].astro.moon_phase}`, '🌜')}      
                    </div>
                </div>)
                : (<Fragment></Fragment>)    
            }
            {mode === 'day' ?
                (<div className="w-full rounded-lg p-4 mt-6 bg-gray-500 hover:bg-zinc-800">
                    <span className="text-2xl font-bold">💨Day</span>
                    <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-10 gap-y-10 font-bold">
                        {DashboardListItem('Avarege Humidity', `${data.forecast!.forecastday[0].day.avghumidity}`, '⛈️')}
                        {DashboardListItem('Daily Chance of Rain', `${data.forecast!.forecastday[0].day.daily_chance_of_rain}`, 'ℹ️')}
                        {DashboardListItem('Daily Chance of Snow', `${data.forecast!.forecastday[0].day.daily_chance_of_snow}`, '🌨️')}
                        {DashboardListItem('UV', `${data.forecast!.forecastday[0].day.uv}`, '😥')}      
                    </div>
                </div>)
                : (<Fragment></Fragment>)    
            }
            {mode === 'airCondition' ?
                (<div className="w-full rounded-lg p-4 mt-6 bg-gray-500 hover:bg-zinc-800">
                <span className="text-2xl font-bold">🍃Air Condition</span>
                <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-10 gap-y-10 font-bold">
                    {DashboardListItem('Real Feel', `${data.current!.feelslike_c === undefined ? data.current!.feelslike_f : data.current!.feelslike_c} º`, '🌎')}
                    {DashboardListItem('Wind', `${data.current!.wind_kph} km/h`, '🍃')}
                    {DashboardListItem('Clouds', `${data.current!.cloud} %`, '☁️')}
                    {DashboardListItem('Precipitation MM', `${data.current!.precip_mm} MM`, '⛈️')}                                
                        </div>
                    </div>
                )  
                : (<Fragment></Fragment>)                       
            }
        </Fragment>
    )
}