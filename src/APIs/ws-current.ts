import { Current } from "@/types/Objects/Current"
import { Location } from "@/types/Objects/Location"
import { Language } from "@/types/Lang"

export function GetCurrent(userSearch : string, lang : Language) : Promise<{
    location : Location,
    current : Current,
}> {    
    return new Promise((resolve, reject) => {        
        fetch(`https://api.weatherapi.com/v1/current.json?q=${userSearch}
            ${lang === 'en' ? '' : '&lang='+lang}&key=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer' :  ''
            },
            //body: JSON.stringify({ key: 'value' }),
        })
        .then((response : Response) => {            
            if(response.status !== 200) {
                console.log (
                    response
                    .text()
                    .then(
                        text => { 
                            console.log(`Error in method GetCurrent : ${text}`)
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