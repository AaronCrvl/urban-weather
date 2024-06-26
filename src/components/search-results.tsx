'use client'
import DashboardRoot from "@/components/dashboard/dashboard-root"
import DashboardToday from "@/components/dashboard/dashboard-today"
import DashboardExtraInfo from "@/components/dashboard/dashboard-extra-info"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardWeek from "@/components/dashboard/dashboard-weeek"
import { Fragment, useState, useEffect } from "react"
import { GetForecast } from "@/APIs/ws-forecast"
import { GetCurrent } from "@/APIs/ws-current"
import LoadingIcon from "@/components/loading-icon"
import { useSearchParams } from "next/navigation"
import { Current } from "@/types/Objects/Current"
import { Location } from "@/types/Objects/Location"
import { Forecast } from "@/types/Objects/Forecast"
import useLanguage from "@/hooks/useLanguage"
import useScale from "@/hooks/useScale"
import DashboardBlock from "./dashboard/dashboard-block"

export default function SearchResult() {            
    // Params ----------------------------------->
    const textSearched = useSearchParams().get('locationURL')!  
    
    // Hooks ----------------------------------->    
    const [lang] = useLanguage()
    const [scale] = useScale()

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
            GetCurrent(textSearched!.toString(), lang).then((data) => setCurrent(data))
            GetForecast(textSearched!.toString(), 7, lang).then((data) => setForecast(data))                    
        }
        
        setDataFilled(currentApiResponse !== undefined && forecastApiResponse !== undefined)        
    }, [currentApiResponse, forecastApiResponse, textSearched])        

    // Jsx ----------------------------------->
    return (
        <div className="w-auto h-auto">
            <div className="flex">                
                <div className="w-full">                                                        
                    {!isDataFilled && <LoadingIcon />} 
                    {isDataFilled &&
                        <DashboardRoot>
                            <Fragment> 
                                <DashboardHeader current={currentApiResponse?.current!} location={currentApiResponse?.location!}/>
                                <DashboardToday data={forecastApiResponse!}/>
                                <div className="mt-6 grid grid-cols-3 grid-rols-1 flex gap-x-5">                                    
                                    <DashboardBlock data={{ forecast: undefined, current: currentApiResponse?.current!}} mode={'airCondition'} />                                    
                                    <DashboardBlock data={forecastApiResponse!} mode={'day'} />
                                    <DashboardBlock data={forecastApiResponse!} mode={'astro'} />
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