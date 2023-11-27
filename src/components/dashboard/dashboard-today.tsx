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
        <div className="p-4 rounded-lg bg-zinc-600 w-auto flex-rol">            
            <span className="text-lg font-bold">Today's Forecast</span>
            <div className="overflow-x-scroll gap-x-6 p-6 justify-center items-center">
                {
                    forecast.map((item) => {
                        return (
                            <div className="rounded-lg bg-zinc-400 w-min h-48">
                                <ul className="w-auto p-2 gap-y-12">
                                    <li>{item.hour}</li>
                                    <li>define image</li>
                                    <li>{item.temp_c ? item.temp_f : item.temp_c}</li>                                    
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}