'use client'

import { useState, useEffect } from "react";
import DashboardRoot from "@/components/dashboard/dashboard-root"
import DashboardToday from "@/components/dashboard/dashboard-today"
import DashboardExtraInfo from "@/components/dashboard/dashboard-extra-info"
import DashboardHeader from "@/components/dashboard/dashboard-header"
import DashboardWeek from "@/components/dashboard/dashboard-weeek"
import SideNav from "@/components/side-nav"
import { Fragment } from "react"

export default function Home() {
  const [searched, setSearched] = useState<Boolean>(false)
  
  function handleSearch () {
    if(!searched) { 
      setSearched(true)
    }
  } 

  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">
      {
        !searched ?
        (          
          <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">
            <span className="text-8xl font-bold">Urban Weather</span>
            <div className="flex mt-8 gap-x-2 text-2xl items-center justify-center">                
              <input type="text" placeholder="Search for a location" className="rounded-full p-10 w-auto h-12 bg-gray-700"></input>
              <button className="rounded-full p-6 w-fit bg-sky-700 font-bold hover:bg-sky-800" onClick={()=> handleSearch()}>Go!</button>          
            </div>
          </div>        
        )
        :
        (
          <div className="w-full h-screen transition ease-in-out delay-150">
            <div className="flex gap-x-4">
                <SideNav />
                <div>                                    
                    <div className="flex h-fit w-full gap-x-2 p-4 text-2xl">                
                        <input type="text" placeholder="Search for a location" className="rounded-full p-8 w-full h-4 bg-gray-700"></input>
                        <button className="rounded-full p-4 w-fit bg-sky-700 font-bold hover:bg-sky-800">Go!</button>          
                    </div>                                                   
                    <DashboardRoot>
                        <Fragment> 
                            <DashboardHeader current={current} location={location}/>
                            <DashboardToday forecast={forecast}/>
                            <DashboardExtraInfo current={current} />
                            <DashboardWeek />                                                        
                        </Fragment>
                    </DashboardRoot>                                                               
                </div>   
            </div>                                 
          </div>
        )
      }    
    </main>
  )
}


// Mock up data ------------------------------------------------------------------------------->
const current = {
  temp_c : "31",
  cloud : 20, 
  humidity : 20,
  wind_kph : 8,
  precip_mm : 1,
  precip_in : 0.5,  
  feelslike_c: 35,               
}

const location = {
  name : "Santa Luzia",
  region : "Minas Gerais",
  country : "Brazil"
}

const forecast = [
  {
      temp_c : "24",
      hour: "2023-11-26 06:00:00"        
  },
  {
      temp_c : "29",
      hour: "2023-11-26 12:00:00"        
  },
  {
      temp_c : "32",
      hour: "2023-11-26 16:00:00"        
  },
  {
      temp_c : "21",
      hour: "2023-11-26 20:00:00"        
  }    
]