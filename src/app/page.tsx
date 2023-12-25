'use client'
import { useState, useRef } from "react";
import { useRouter } from "next/router";

export default function Home() {
  // Hooks ----------------------------------->
  //const router = useRouter()
  const [searched, setSearched] = useState<boolean>(false)
  const inputText = useRef(null)
  
  // Functions ----------------------------------->
  function handleSearch () {
    if(inputText.current === null || inputText.current === null) return
    
    // Dynamic Redirection
    //router.push('/search/[text]', `/search/${inputText.current}`)    
  } 

  // Jsx ----------------------------------->
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">    
        <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">
          <span className="text-8xl font-bold">Urban Weather</span>
          <div className="flex mt-8 gap-x-2 text-2xl items-center justify-center">                
            <input type="text" placeholder="Search for a location" ref={inputText} className="rounded-full p-10 w-auto h-12 bg-gray-700" onChange={()=>handleSearch()}></input>                        
          </div>
        </div>                      
    </main>
  )
}