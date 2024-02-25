import { ForecastApiResponse } from "@/types/APIResponseObjects/ForecastApiResponse";

export function GetForecast(userSearch : string, days : number = 7, lang = '') : Promise<ForecastApiResponse> {
    return new Promise((resolve, reject) => {        
        fetch(`https://api.weatherapi.com/v1/current.json?q=${userSearch}${lang === '' ? '' : '&lang=' + lang}&days=${days}&key=${process.env.WEATHER_API_KEY}`, {
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
                            console.log(`Error in method GetForecast : ${text}`)
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