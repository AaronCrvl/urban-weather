'use client'

import { uid } from "uid";
import { useState } from "react";
import useScale from "@/hooks/useScale";
import { MeasurementScale } from "@/types/MeasurementScale";

export default function SearchSettingsMeasurementScale() {
    const scales : MeasurementScale[] = ['Cº', 'Fº']

    // Hooks ----------------------------------->    
    const [expand, setExpand] = useState<Boolean>(false)         
    const [scale, setScale] = useScale() 
    
    // Functions ----------------------------------->
    function handleExpand() : void {
        setExpand(!expand)
    }

    function handleScaleSelection(selectedScale : MeasurementScale) : void {
        setScale(selectedScale)
        setExpand(!expand)
    }

    // Jsx ----------------------------------->
    return (
        <div className="items-center align-center text-center">
            <span className="w-min">Scale</span>
            {
                expand ?
                (
                    <ul>
                        {
                            scales.map(scale => {
                                return(
                                    <li 
                                        key={uid()}
                                        className="rounded-lg hover:bg-gray-800"
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
                    <div className="mt-3">
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