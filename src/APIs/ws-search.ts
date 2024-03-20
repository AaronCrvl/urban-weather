import { SearchApiResponse } from "@/types/APIResponseObjects/SearchApiResponse"
import { Search } from "@/types/Objects/Search"

export function GetSearchResults(userSearch : string) : Promise<Search[]> {
    const headers = {
        'Content-Type': 'application/json',        
    }

    return new Promise((resolve, reject) => {       
        fetch(`https://api.weatherapi.com/v1/search.json?q=${userSearch}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, {
            method: 'GET',
            headers: headers,            
        })
        .then((response : Response) => {            
            if(response.status !== 200) {
                console.log (
                    response
                    .text()
                    .then(
                        text => { 
                            console.log(`Error in method GetSearchResults : ${text}`)
                            reject(text)
                        }
                    )
                )             
            } 

            // 200
            resolve(response.json())
        })
    })        
}