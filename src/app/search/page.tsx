'use client'

import SearchResult from "@/components/search-results"
import SideNav from "@/components/side-nav"
import SearchBar from "@/components/search-bar"
import SearchSettingsRoot from "@/components/search-settings/search-settings-root"
import SearchSettingsLang from "@/components/search-settings/search-settings-lang"
import SearchSettingsMeasurementScale from "@/components/search-settings/search-settings-measurement-scale"
import { useRouter } from "next/navigation"

export default function SearchPage() {     
    // Hooks -----------------------------------> 
    const router = useRouter()
    
    // JSX ----------------------------------->
    return (
        <div className="w-full h-auto">
            {/* <SideNav /> */}
            <div className="bg-gray-700 flex w-full p-2 mb-6">
                {/* <SearchBar /> */}
                
                <ul className="flex-col space-y-14 text-center justify-center items-center">
                    <li 
                        className='p-4 text-4xl cursor-pointer font-bold'
                        onClick={()=> {
                            router.back()
                        }}
                    >
                        ☀️ Urban Weather
                    </li> 
                </ul>
                
                <div className="ml-auto flex p-1 gap-x-10">                    
                    <SearchSettingsLang />
                    <SearchSettingsMeasurementScale />                     
                </div>                
            </div>
            <SearchResult />
        </div>
    )
}