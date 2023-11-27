'use client'

import { uid } from 'uid';

// Types ----------------------------------->
type DashboardTodayProps = {
   forecast : hourWeatherList 
}

type hourWeatherList = {
    temp_c? : string,  
    temp_f? : string,    
    hour : string,    
}[]

export default function DashboardToday({ forecast } : DashboardTodayProps) {
    // JSX ----------------------------------->
    return (
        <div className="p-2 rounded-lg bg-zinc-900 flex-rol">            
            <span className="text-lg font-bold">Today{"'"}s Forecast</span>
            <div className="flex text-2xl font-bold w-fit gap-x-10 p-6 justify-center items-center">
                {
                    forecast.map((item) => {
                        return (
                            <div
                                key={uid()} 
                                className="rounded-lg p-2 bg-zinc-700 w-fit h-48 text-center">
                                <ul className="w-auto p-2">
                                    <li className='mb-2'>{item.hour.substring(10, item.hour.length)}</li>
                                    <li className='mb-2'>define image</li>
                                    <li className='text-4xl'>{item.temp_c === undefined ? item.temp_f : item.temp_c}º</li>                                    
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}