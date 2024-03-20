'use client'
import { useState, useRef } from "react";
import {useRouter} from 'next/navigation';
import { GetSearchResults } from "@/APIs/ws-search";
import SearchBar from "@/components/search-bar";

export default function Home() {      

  // Jsx ----------------------------------->
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">    
        <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">
          <span className="text-8xl font-bold">Urban Weather</span>
          <div className="w-fit mt-8 gap-x-2 text-2xl items-center justify-center">              
            {/* Search Bar */}
            <SearchBar />
          </div>
        </div>                      
    </main>
  )
}