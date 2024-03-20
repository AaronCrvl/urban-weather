"use client"
import { useState, useRef, Fragment } from "react";
import Router from 'next/router';
import { SearchApiResponse } from "@/types/APIResponseObjects/SearchApiResponse";
import { GetSearchResults } from "@/APIs/ws-search";
import PopUpMessage from "@/components/pop-up-message";
import { uid } from 'uid';

export default function Home() {    
  // Hooks ----------------------------------->    
  const [searchedResults, setSearchedResults] = useState<SearchApiResponse | null>()
  const [popUpTrigger, setPopUpTrigger] = useState<Boolean>(false)
  const inputText = useRef(null)
  
  // Functions ----------------------------------->
  function handleSearch () {    
    if(inputText.current === null || inputText.current === '') {
      setSearchedResults(null)
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
    Router.push({
      pathname: '/search',
      query: { location: locationId },
    })   
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
            {(searchedResults !== null && searchedResults !== undefined &&  searchedResults!.search.length <= 0) ?
              <Fragment />
              :
              <ul>
                {searchedResults?.search
                  .map(item => 
                    <li 
                      key={uid()}
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