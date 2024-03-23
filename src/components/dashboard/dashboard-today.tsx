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
        <div className="p-4 w-auto h-auto rounded-lg bg-zinc-900 flex-rol">            
            <span className="text-2xl font-bold">Today{"'"}s Forecast</span>
            <div className="mt-6 grid grid-cols-6 grid-rols-6 text-2xl font-bold gap-x-2 gap-y-2 p-2">
                {data &&
                    data.forecast.forecastday[0].hour.map((item) => {
                        return (
                            <div
                                key={uid()} 
                                className="w-52 rounded-lg p-2 bg-zinc-700 hover:bg-zinc-900 w-min h-min text-center"
                            >                                
                                <div className='mb-2 text-2xl'>{item.time.substring(10, item.time.length)}</div>
                                <img className='mr-auto ml-auto' alt="weather-icon" src={item.condition.icon}/>      
                                <div className='text-2xl'>{item.temp_c === undefined ? item.temp_f : item.temp_c}º</div>
                                {/* <div className='text-2xl'> 💦{item.chance_of_rain}</div>                                                                     */}
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}