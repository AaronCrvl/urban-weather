import { Dashboard } from "@/components/dashboard"
import SideNav from "@/components/side-nav"
import { Fragment } from "react"

export default function LocationWeather() {
    return (
        <div className="w-full h-screen bg-red-600">
            <div className="flex">
                <SideNav />
                <div className="flex gap-x-2 p-4 text-2xl items-center justify-center place-items-start">                
                    <input type="text" placeholder="Search for a location" className="rounded-full p-10 w-auto h-12 bg-gray-700"></input>
                    <button className="rounded-full p-6 w-fit bg-sky-700 font-bold hover:bg-sky-800">Go!</button>          
                </div>
            </div>   
            <div className="w-full">                               
                <Dashboard.Root>
                    <Fragment> 
                        <Dashboard.Header current={current} location={location}/>
                        <Dashboard.Today forecast={forecast}/>
                        <Dashboard.Week />                                                        
                    </Fragment>
                </Dashboard.Root>                                                               
            </div>                     
        </div>
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