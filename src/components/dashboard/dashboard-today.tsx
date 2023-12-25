'use client'
import { Forecast } from '@/types/Forecast';
import { DefineIcon } from '../utils/image-handler';
import { uid } from 'uid';

// Types ----------------------------------->
type DashboardTodayProps = {
   forecast : Forecast[]
}

export default function DashboardToday({ forecast } : DashboardTodayProps) {          
    // Jsx ----------------------------------->
    return (
        <div className="p-2 rounded-lg bg-zinc-900 flex-rol">            
            <span className="text-lg font-bold">Today{"'"}s Forecast</span>
            <div className="flex text-2xl font-bold w-fit gap-x-10 p-6 justify-center items-center">
                {forecast &&
                    forecast.map((item) => {
                        return (
                            <div
                                key={uid()} 
                                className="rounded-lg p-2 bg-zinc-700 w-fit h-48 text-center"
                            >
                                <ul className="w-auto p-2">
                                    <li className='mb-2'>{item.hour.toDateString()}</li>
                                    <li className='mb-2'>{item.temp_c ? DefineIcon(parseInt(item.temp_f!)) : DefineIcon(parseInt(item.temp_c!))}</li>
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