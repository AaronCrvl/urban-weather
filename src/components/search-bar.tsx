'use client'
import { uid } from 'uid';
import { useRouter } from 'next/navigation';
import { Fragment, useRef, useState } from "react"
import { Search } from "@/types/Objects/Search"
import { GetSearchResults } from "@/APIs/ws-search";
import { useSearchParams } from 'next/navigation';
import useLanguage from '@/hooks/useLanguage';

export default function SearchBar() {
    // Hooks ----------------------------------->
    const searchParams = useSearchParams()
    const router = useRouter()     
    const [searchedResults, setSearchedResults] = useState<Search[]>()
    const inputText = useRef<any>(null)
    const [lang] = useLanguage()

    // Functions ----------------------------------->
    function handleSearch () : void {        
        if(inputText.current === null)         
            return  

        if(inputText.current.value === '')
            setSearchedResults(undefined)

        if(inputText.current.value.length < 4)
        return

        GetSearchResults(inputText.current.value, lang)
        .then(data => { 
            setSearchedResults(data)      
            })    
            .catch( function() { // Error trigger pop up message        
                alert('Something went wrong with the search, try again later!')
            }
        )    
    }

    function redirectOnSelection(locationURL : string) {           
        setSearchedResults(undefined)        
        router.push(`/search?locationURL=${locationURL}`)               
    }    

    // Jsx ----------------------------------->
    return (
        <div>
            {/* Search Input */}
            <div>
                <input 
                    type="text" 
                    onInput={()=> handleSearch()} 
                    placeholder="Search for a location" 
                    ref={inputText} 
                    className="rounded-full p-10 w-full h-12 bg-gray-700"               
                />   
            </div>                     

            {/* Search Results */}
            {(searchedResults === null || searchedResults === undefined || searchedResults!.length <= 0) ?
            <Fragment />
            :
            <ul className="float mt-2 cursor-pointer p-2 w-auto bg-gray-500 rounded-lg">
                {searchedResults?.map(item => 
                    <li 
                        key={uid()}
                        className="w-full p-2 hover:bg-gray-400"
                        onClick={()=> redirectOnSelection(item.url)}
                    >
                        <span>{`${item.name + ', ' + item.region + ', ' + item.country}`}</span>
                    </li>
                    )
                }
            </ul>  
            }
        </div>
    )
}