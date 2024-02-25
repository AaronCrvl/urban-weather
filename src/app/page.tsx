'use client'
import { useState, useRef, Fragment } from "react";
import { useRouter } from "next/router";
import { Search } from "@/types/Search";
import { GetSearchResults } from "@/APIs/ws-search";
import PopUpMessage from "@/components/pop-up-message";

export default function Home() {  
  // Hooks ----------------------------------->  
  const router = useRouter()
  const [searchedResults, setSearchedResults] = useState<Search[]>([])
  const [popUpTrigger, setPopUpTrigger] = useState<Boolean>(false)
  const inputText = useRef(null)
  
  // Functions ----------------------------------->
  function handleSearch () {    
    if(inputText.current === '' || inputText.current === null) {
      setSearchedResults([])
      return
    }

    GetSearchResults(inputText.current)
    .then(data => setSearchedResults(data))    
    .catch( function() { // Error trigger pop up message        
        setPopUpTrigger(true)
      }
    )
  } 

  function redirectOnSelection(locationId : number) {       
    // Dynamic Redirection
    router.push('/search/[text]', `/search/${locationId.toString()}`)   
  }

  // Jsx ----------------------------------->
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">    
        <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">
          <span className="text-8xl font-bold">Urban Weather</span>
          <div className="flex mt-8 gap-x-2 text-2xl items-center justify-center">   
            {/* Information */}
            {popUpTrigger && PopUpMessage('No Result for this search, try again.', 3)}

            {/* Search Input */}
            <input 
              type="text" 
              onInput={()=> handleSearch()} 
              placeholder="Search for a location" 
              ref={inputText} 
              className="rounded-full p-10 w-auto h-12 bg-gray-700" 
              onChange={()=>handleSearch()}
            />                        

            {/* Search Results */}
            {searchedResults.length <= 0 ?
              <Fragment />
              :
              <ul>
                {searchedResults
                  .map(item => 
                    <li 
                      className="bg-gray-200 hover:bg-gray-400"
                      onClick={()=> redirectOnSelection(item.id)}
                    >
                      {`${item.name + ', ' + item.region + ', ' + item.country}`}
                    </li>
                  )
                }
              </ul>                            
            }
          </div>
        </div>                      
    </main>
  )
}