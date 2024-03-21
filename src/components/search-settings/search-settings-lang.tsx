'use client'

import { uid } from "uid";
import { useState, useEffect } from "react";
import useLanguage from "@/hooks/useLanguage";

export default function SearchSettingsLang() {
    // Hooks ----------------------------------->
    const [lang, setLang] = useLanguage()
    const [expand, setExpand] = useState<Boolean>(false)     
    const langs = ['pt', 'en', 'es']
    
    // Functions ----------------------------------->
    function handleExpand() {
        setExpand(!expand)
    }

    function handleLanguageSelection(lang : string) {
        setLang(lang)
        setExpand(!expand)
    }

    // Jsx ----------------------------------->
    return (
        <div className="items-center align-center text-center">
            <span className="w-min">Language</span>
            {
                expand ?
                (
                    <ul>
                        {
                            langs.map(lang => {
                                return(
                                    <li
                                        key={uid()} 
                                        className="hover:bg-gray-600"
                                        onClick={()=> handleLanguageSelection(lang)}
                                    >
                                        {lang}
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
                            {lang} 
                        </span>
                    </div>
                )
            }
        </div>
    );
}