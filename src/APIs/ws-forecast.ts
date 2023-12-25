import { Forecast } from "@/types/Forecast";

export function GetForecast() : Promise<Forecast[]> {
    return new Promise((resolve, reject) => {
        let forecast : Forecast = {
            temp_c : "",
            temp_f : "",
            hour : new Date(Date.now())
        }

        fetch('https://api.example.com/Get', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Bearer' :  ''
            },
            //body: JSON.stringify({ key: 'value' }),
        })
        .then((response : Response) => {
            
            if(response.status !== 200) {
                console.log(response.text().then(text => console.log(`Error in method GetForecast : ${text}`)))
                reject(forecast)
            } 

            // 200
            resolve(response.json())
        })
    })        
}