import { Location } from "@/types/Location"

export function GetLocation() : Promise<Location> {
    return new Promise((resolve, reject) => {
        let location : Location = {
            name: "New York",
            region: "New York",
            country: "United States of America",
            lat: 40.71,
            lon: -74.01,
            tz_id: "America/New_York",
            localtime_epoch: 1658522976,
            localtime: "2022-07-22 16:49"  
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
                console.log(response.text().then(text => console.log(`Error in method GetLocation : ${text}`)))
                reject(location)
            } 

            // 200
            resolve(response.json())
        })
    })        
}