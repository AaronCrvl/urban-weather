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
        <div className="mt-12 p-10 w-auto h-auto rounded-lg bg-gray-500 flex-rol">            
            <span className="text-4xl font-bold mb-5">Today{"'"}s Forecast</span>
            <div className="p-6 mt-6 grid grid-cols-6 grid-rols-6 text-2xl font-bold gap-x-2 gap-y-4">
                {data &&
                    data.forecast.forecastday[0].hour.map((item) => {
                        return (
                            <div
                                key={uid()} 
                                className="w-80 h-fit rounded-lg p-5 bg-gray-400 hover:bg-zinc-900 w-min h-min text-center"
                            >                                
                                <div className='mb-2 text-2xl mb-2'>{item.time.substring(10, item.time.length)}</div>
                                <div className='flex bg-gray-500 p-1 rounded-lg'>
                                    <img className='mr-auto ml-auto' alt="weather-icon" src={item.condition.icon}/>      
                                    <div className='text-2xl'>{item.temp_c === undefined ? item.temp_f : item.temp_c}º</div>                            
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}