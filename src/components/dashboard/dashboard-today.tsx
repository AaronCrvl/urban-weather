'use client'
import { uid } from 'uid';
import { Current } from '@/types/Objects/Current';
import { Location } from '@/types/Objects/Location';
import { Forecast } from '@/types/Objects/Forecast';

export default function DashboardToday({data}  :  {
    data : {
        location : Location,
        current : Current,
        forecast : Forecast
    }
}) {          
    // Jsx ----------------------------------->
    return (
        <div className="w-auto p-2 rounded-lg bg-zinc-900 flex-rol">            
            <span className="text-lg font-bold">Today{"'"}s Forecast</span>
            <div className="flex text-2xl font-bold overflow-x-scroll gap-x-2 p-2 justify-center items-center">
                {data &&
                    data.forecast.forecastday[0].hour.map((item) => {
                        return (
                            <div
                                key={uid()} 
                                className="rounded-lg p-2 bg-zinc-700 hover:bg-zinc-900 w-min h-min text-center"
                            >                                
                                <div className='mb-2 text-xl'>{item.time.substring(10, item.time.length)}</div>
                                {/* <li className='mb-2'>{item.temp_c ? DefineWeatherIcon(item.temp_f) : DefineWeatherIcon(item.temp_c)}</li> */}
                                <div className='text-4xl'>{item.temp_c === undefined ? item.temp_f : item.temp_c}º</div>                                                                    
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}