'use client'

import { uid } from "uid";
import { useState } from "react";
import useLanguage from "@/hooks/useLanguage";
import { Language } from "@/types/Lang";

export default function SearchSettingsLang() {
    // Hooks ----------------------------------->
    const [lang, setLang] = useLanguage()
    const [expand, setExpand] = useState<Boolean>(false)     
    const langs :  Language[] = ['pt', 'en', 'es']
    
    // Functions ----------------------------------->
    function handleExpand() {
        setExpand(!expand)
    }

    function handleLanguageSelection(lang : Language) {
        setLang(lang)
        setExpand(!expand)
    }

    // Jsx ----------------------------------->
    return (
        <div className="flex gap-x-4 items-center align-center text-center">
            <span className="w-min text-2xl font-bold">Language</span>
            {
                expand ?
                (
                    <ul>
                        {
                            langs.map(lang => {
                                return(
                                    <li
                                        key={uid()} 
                                        className="rounded-lg hover:bg-gray-800 cursor-pointer"
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
                    <div className="mt-3 cursor-pointer">
                        <span 
                            className="rounded-full p-2 bg-gray-500 text-white hover:bg-gray-600"
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