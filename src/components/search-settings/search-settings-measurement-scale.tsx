'use client'

import { uid } from "uid";
import { useState, useEffect } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function SearchSettingsMeasurementScale() {
    // Hooks ----------------------------------->    
    const [expand, setExpand] = useState<Boolean>(false)     
    const scales = ['Cº', 'Fº']
    
    // Functions ----------------------------------->
    function handleExpand() {
        setExpand(!expand)
    }

    function handleLanguageSelection(lang : string) {
        // Custom hook action
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
                                        className="hover:bg-gray-600"
                                        onClick={()=> handleLanguageSelection(scale)}
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
                            className="rounded-lg p-2 bg-gray-500 text-white hover:bg-gray-300"
                            onClick={()=>handleExpand()}
                        >
                            {'Selected Scale'} 
                        </span>
                    </div>
                )
            }
        </div>
    );
}