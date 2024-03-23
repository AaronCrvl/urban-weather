'use client'
import DashboardRoot from "@/components/dashboard/dashboard-root"
import DashboardToday from "@/components/dashboard/dashboard-today"
import DashboardExtraInfo from "@/components/dashboard/dashboard-extra-info"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardAstro from "./dashboard/dashboard-astro"
import DashboardWeek from "@/components/dashboard/dashboard-weeek"
import DashboardDay from "./dashboard/dashboard-day"
import SideNav from "@/components/side-nav"
import { Fragment, useState, useEffect } from "react"
import { GetForecast } from "@/APIs/ws-forecast"
import { GetCurrent } from "@/APIs/ws-current"
import LoadingIcon from "@/components/loading-icon"
import { useSearchParams } from "next/navigation"
import { Current } from "@/types/Objects/Current"
import { Location } from "@/types/Objects/Location"
import { Forecast } from "@/types/Objects/Forecast"

export default function SearchResult() {            
    // Params ----------------------------------->
    const textSearched = useSearchParams().get('locationURL')!  
    
    // Hooks ----------------------------------->    
    const [currentApiResponse, setCurrent] = useState<{
        location : Location,
        current : Current,
    }>()
    const [forecastApiResponse, setForecast] = useState<{
        location : Location,
        current : Current,
        forecast : Forecast
    }>()    

    const [isDataFilled, setDataFilled] = useState<boolean>(false)
    useEffect(()=> {
        if(!forecastApiResponse || !currentApiResponse) {
            GetCurrent(textSearched!.toString(), 'pt').then((data) => setCurrent(data))
            GetForecast(textSearched!.toString()).then((data) => setForecast(data))                    
        }
        
        setDataFilled(currentApiResponse !== undefined && forecastApiResponse !== undefined)        
    }, [currentApiResponse, forecastApiResponse, textSearched])        

    // Jsx ----------------------------------->
    return (
        <div className="w-auto h-auto">
            <div className="flex">
                <SideNav />
                <div className="w-full">                                                        
                    {!isDataFilled && <LoadingIcon />} 
                    {isDataFilled &&
                        <DashboardRoot>
                            <Fragment> 
                                <DashboardHeader current={currentApiResponse?.current!} location={currentApiResponse?.location!}/>
                                <DashboardToday data={forecastApiResponse!}/>
                                <div className="grid grid-cols-3 grid-rols-2 flex gap-x-10">
                                    <DashboardExtraInfo current={currentApiResponse?.current!} />
                                    <DashboardAstro data={forecastApiResponse!}/>
                                    <DashboardDay data={forecastApiResponse!}/>
                                </div>
                                <DashboardWeek />                                                        
                            </Fragment>
                        </DashboardRoot>
                    }                                                                                                                                   
                </div>   
            </div>                                 
        </div>
    )
}