'use client'
import DashboardRoot from "@/components/dashboard/dashboard-root"
import DashboardToday from "@/components/dashboard/dashboard-today"
import DashboardExtraInfo from "@/components/dashboard/dashboard-extra-info"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardWeek from "@/components/dashboard/dashboard-weeek"
import SideNav from "@/components/side-nav"
import { Fragment, useState, useEffect } from "react"
import { GetForecast } from "@/APIs/ws-forecast"
import { GetCurrent } from "@/APIs/ws-current"
import LoadingIcon from "@/components/loading-icon"
import { useSearchParams } from "next/navigation"
import { ForecastApiResponse } from "@/types/APIResponseObjects/ForecastApiResponse"
import { CurrentApiResponse } from "@/types/APIResponseObjects/CurrentApiResponse"

export default function SearchResult() {            

    // Params ----------------------------------->
    const textSearched = useSearchParams().get('location')!  
    
    // Hooks ----------------------------------->    
    const [current, setCurrent] = useState<CurrentApiResponse>()
    const [forecast, setForecast] = useState<ForecastApiResponse>()    
    const [dataFilled, setDataFilled] = useState<boolean>(false)
    useEffect(()=> {
        if(!forecast || !current || !location) {
            GetCurrent(textSearched!.toString(), 'pt').then((data : CurrentApiResponse) => setCurrent(data))
            GetForecast(textSearched!.toString()).then((data : ForecastApiResponse) => setForecast(data))                    
        }

        setDataFilled(current !== undefined && forecast !== undefined  && location !== undefined)
    }, [current, forecast, textSearched])        

    // Jsx ----------------------------------->
    return (
        <div className="w-full h-auto">
            <div className="flex gap-x-2">
                <SideNav />
                <div>                                    
                    <div className="flex h-fit w-full gap-x-2 p-4 text-2xl">                
                        <input 
                            type="text" 
                            placeholder="Search for a location" 
                            className="rounded-full p-8 w-full h-4 bg-gray-700"
                        />                               
                    </div>  
                    {!dataFilled && <LoadingIcon />} 
                    {dataFilled &&
                        <DashboardRoot>
                            <Fragment> 
                                <DashboardHeader current={current?.current!} location={current?.location!}/>
                                <DashboardToday forecast={forecast!}/>
                                <DashboardExtraInfo current={current?.current!} />
                                <DashboardWeek />                                                        
                            </Fragment>
                        </DashboardRoot>
                    }                                                                                                                                   
                </div>   
            </div>                                 
        </div>
    )
}