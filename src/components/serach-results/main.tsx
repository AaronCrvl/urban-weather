'use client'
import DashboardRoot from "@/components/dashboard/dashboard-root"
import DashboardToday from "@/components/dashboard/dashboard-today"
import DashboardExtraInfo from "@/components/dashboard/dashboard-extra-info"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardWeek from "@/components/dashboard/dashboard-weeek"
import SideNav from "@/components/side-nav"
import { Fragment, useState, useEffect } from "react"
import { Forecast } from "@/types/Forecast"
import { GetForecast } from "@/APIs/ws-forecast"
import { Current } from "@/types/Current"
import { GetLocation } from "@/APIs/ws-location"
import { Location } from "@/types/Location"
import { GetCurrent } from "@/APIs/ws-current"
import LoadingIcon from "@/components/loading-icon"

export default function SearchResult() {             
    // Props ----------------------------------->
    // const router = useRouter();
    // const { textSearched } = router.query;

    // Hooks ----------------------------------->
    const [current, setCurrent] = useState<Current>()
    const [forecast, setForecast] = useState<Forecast[]>()
    const [location, setLocation] = useState<Location>()
    const [dataFilled, setDataFilled] = useState<boolean>(false)
    useEffect(()=> {
        if(!forecast || !current || !location) {
            GetCurrent().then((data : Current) => setCurrent(data))
            GetForecast().then((data : Forecast[]) => setForecast(data))
            GetLocation().then((data : Location) => setLocation(data))             
        }

        setDataFilled(current !== undefined && forecast !== undefined  && location !== undefined)
    }, [current, forecast, location])    

    // Jsx ----------------------------------->
    return (
        <div className="w-full h-auto">
            <div className="flex gap-x-2">
                <SideNav />
                <div>                                    
                    <div className="flex h-fit w-full gap-x-2 p-4 text-2xl">                
                        <input type="text" placeholder="Search for a location" className="rounded-full p-8 w-full h-4 bg-gray-700"></input>                               
                    </div>  
                    {!dataFilled && <LoadingIcon />} 
                    {dataFilled &&
                        <DashboardRoot>
                            <Fragment> 
                                <DashboardHeader current={current!} location={location!}/>
                                <DashboardToday forecast={forecast!}/>
                                <DashboardExtraInfo current={current!} />
                                <DashboardWeek />                                                        
                            </Fragment>
                        </DashboardRoot>
                    }                                                                                                                                   
                </div>   
            </div>                                 
        </div>
    )
}