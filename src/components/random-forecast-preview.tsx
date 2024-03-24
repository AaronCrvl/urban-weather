'use client'

import { uid } from "uid";
import { GetForecast } from "@/APIs/ws-forecast";
import { useState, useEffect } from "react";
import { Current } from "@/types/Objects/Current";
import { Location } from "@/types/Objects/Location";
import { Forecast } from "@/types/Objects/Forecast";
import { useRouter } from "next/navigation";
import useLanguage from "@/hooks/useLanguage";
import useScale from "@/hooks/useScale";

export default function RandomForecastPreview() {
    // Hooks ----------------------------------->
    const router = useRouter()
    const [scale] = useScale()
    const [lang] = useLanguage()
    const [forecasts, setForecast] = useState<{
        location : Location,
        current : Current,
        forecast : Forecast,
    }[]>()

    useEffect(()=> {
        if(forecasts !== undefined)
            return    
        
        Promise.all([ 
            GetForecast('guangzhou-guangdong-china', 1, lang),
            GetForecast('rio-de-janeiro-rio-de-janeiro-brazil', 1, lang),
            GetForecast('las-vegas-nevada-united-states-of-america', 1, lang),            
            GetForecast('marseille-provence-alpes-cote-dazur-france', 1, lang),            
        ])
        .then(reponses => {
            setForecast(reponses)            
        })
        .catch( function() { // Error trigger pop up message        
            alert('Something went wrong with the search, try again later!')
        })
    }, [forecasts])
    
    // Functions ----------------------------------->
    function handleLocationRedirection(locationURL : string) : void {
        if(locationURL.toLowerCase().includes('vegas')) {        
            router.push(`/search?locationURL=las-vegas-nevada-united-states-of-america`)
            return 
        }

        if(locationURL.toLowerCase().includes('guangzhou')) {        
            router.push(`/search?locationURL=guangzhou-guangdong-china`)
            return 
        }

        if(locationURL.toLowerCase().includes('marseille')) {        
            router.push(`/search?locationURL=marseille-provence-alpes-cote-dazur-france`)
            return 
        }

        if(locationURL.toLowerCase().includes('rio')) {        
            router.push(`/search?locationURL=rio-de-janeiro-rio-de-janeiro-brazil`)
            return 
        }
    }

    // Jsx ----------------------------------->
    return (
        <div className="container mt-20 opacity-70 hover:opacity-80">
            <span className="text-white text-4xl font-bold">Around The World</span>
            <div className="w-fit h-auto flex mt-5 align-center items-center text-center">
                {forecasts &&
                    forecasts.map((forecast) : any => {
                        return(
                            <div 
                                key={uid()}
                                onClick={()=> handleLocationRedirection(forecast.location.name)} 
                                className="bg-gray-400 list-group w-60 cursor-pointer mr-12 border-4 border-gray-700 rounded-lg w-48 h-80 p-2 hover:scale-110 trasition-ease-in"
                            >                                
                                {/* Header Info */}
                                <div className="mt-5 text-2xl font-semibold">{`${forecast.location.name}, ${forecast.location.country}`}</div>
                                <div 
                                    className="p-2 w-auto mt-5 text-6xl font-bold"
                                >
                                    {scale.includes('Cº') ? `${forecast.current.temp_c} C` : `${forecast.current.temp_f} F`}º
                                </div>                                
                                <img 
                                    className='ml-auto mr-auto'
                                    alt='weather-icon'                                    
                                    src={forecast.current.condition.icon}
                                    loading="lazy"
                                    width={70}
                                    height={70}
                                />                            
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}