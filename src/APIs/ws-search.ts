import { Search } from "@/types/Objects/Search"
import { Language } from "@/types/Lang"

export function GetSearchResults(userSearch : string, lang : Language) : Promise<Search[]> {
    const headers = {
        'Content-Type': 'application/json',        
    }    

    return new Promise((resolve, reject) => {       
        fetch(`https://api.weatherapi.com/v1/search.json?q=${userSearch}
        ${lang === 'en' ? '' : '&lang='+lang}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, {
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