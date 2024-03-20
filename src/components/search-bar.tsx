'use client'
import { uid } from 'uid';
import { useRouter } from 'next/navigation';
import { useRef, useState } from "react"
import { Search } from "@/types/Objects/Search"
import { GetSearchResults } from "@/APIs/ws-search";

export default function SearchBar() {
    // Hooks ----------------------------------->
    const router = useRouter() 
    const [searchedResults, setSearchedResults] = useState<Search[]>()
    const inputText = useRef<any>(null)

    // Functions ----------------------------------->
    function handleSearch () {        
        if(inputText.current === null || inputText.current === '')         
        return  

        if(inputText.current.value.length < 4)
        return

        GetSearchResults(inputText.current.value)
        .then(data => { 
            setSearchedResults(data)      
            })    
            .catch( function() { // Error trigger pop up message        
                alert('Something went wrong with the search, try again later!')
            }
        )    
    }

    function redirectOnSelection(locationURL : string) {       
        // Dynamic Redirection
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
            {(searchedResults !== null && searchedResults !== undefined && searchedResults!.length <= 0) ?
            <span className="text-white-8xl">No results</span>
            :
            <ul className="mt-2 cursor-pointer p-2 w-fit bg-gray-300 rounded-lg">
                {searchedResults?.map(item => 
                    <li 
                        key={uid()}
                        className="float p-2 hover:bg-gray-400"
                        onClick={()=> redirectOnSelection(item.url)}
                    >
                        {`${item.name + ', ' + item.region + ', ' + item.country}`}
                    </li>
                    )
                }
            </ul>  
            }
        </div>
    )
}