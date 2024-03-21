'use client'

import { Forecast } from "@/types/Objects/Forecast"

export default function DashboardAstro({data}  :  {
    data : {        
        forecast : Forecast
    }
}) {
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
        <div className="w-fit rounded-lg p-4 mt-6 bg-zinc-900">
            <span className="text-2xl font-bold">🌠Astro</span>
            <div className="mt-6 grid grid-cols-2 grid-rols-2 gap-x-10 gap-y-10 font-bold">
                {ListItem('Moon Up', `${data.forecast.forecastday[0].astro.is_moon_up ? 'Yes' : 'No'}`, '🌚')}
                {ListItem('Sun Up', `${data.forecast.forecastday[0].astro.is_sun_up ? 'Yes' : 'No'}`, '🌞')}
                {ListItem('Sun Rise', `${data.forecast.forecastday[0].astro.sunrise ? 'Yes' : 'No'}`, '🌄')}
                {ListItem('Moon Phase', `${data.forecast.forecastday[0].astro.moon_phase}`, '🌜')}      
            </div>
        </div>
    )
}