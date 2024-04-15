'use client'

import { uid } from "uid";
import { useState } from "react";
import useScale from "@/hooks/useScale";
import { TemperatureUnit } from "@/types/TemperatureUnit";

export default function SearchSettingsTemperatureUnit() {
    const scales : TemperatureUnit[] = ['Cº', 'Fº']

    // Hooks ----------------------------------->    
    const [expand, setExpand] = useState<Boolean>(false)         
    const [scale, setScale] = useScale() 
    
    // Functions ----------------------------------->
    function handleExpand() : void {
        setExpand(!expand)
    }

    function handleScaleSelection(selectedScale : TemperatureUnit) : void {
        setScale(selectedScale)
        setExpand(!expand)
    }

    // Jsx ----------------------------------->
    return (
        <div className="flex gap-x-4 items-center align-center text-center">
            <span className="w-min text-2xl font-bold">Unit</span>
            {
                expand ?
                (
                    <ul>
                        {
                            scales.map(scale => {
                                return(
                                    <li 
                                        key={uid()}
                                        className="rounded-lg hover:bg-gray-800 cursor-pointer"
                                        onClick={()=> handleScaleSelection(scale)}
                                    >
                                        {scale}
                                    </li>
                                )
                            })
                        }
                    </ul>
                )
                :
                (
                    <div className="mt-3 cursor-pointer">
                        <span 
                            className="rounded-full p-2 bg-gray-500 text-white hover:bg-gray-600"
                            onClick={()=>handleExpand()}
                        >
                            {scale}
                        </span>
                    </div>
                )
            }
        </div>
    );
}