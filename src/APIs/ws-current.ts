import { Current } from "@/types/Current"

export function GetCurrent() : Promise<Current> {
    return new Promise((resolve, reject) => {
        let current : Current = {
            last_updated_epoch: 1658522700,
            last_updated: "2022-07-22 16:45",
            temp_c: 34.4,
            temp_f: 93.9,
            is_day: 1,
            condition : {
                text: "Partly cloudy",
                icon: "cdn.weatherapi.com/weather/64x64/day/116.png",
                code: 1003,     
            },
            wind_mph: 16.1,
            wind_kph: 25.9,
            wind_degree: 180,
            wind_dir: "S",
            pressure_mb: 1011,
            pressure_in: 29.85,
            precip_mm: 0,
            precip_in: 0,
            humidity: 31,
            cloud: 75,
            feelslike_c: 37,
            feelslike_f: 98.6,
            vis_km: 16,
            vis_miles: 9,
            uv: 8,
            gust_mph: 11.6,
            gust_kph: 18.7,
            air_quality : {
                co: 293.70001220703125,
                no2: 18.5,
                o3:	234.60000610351562,
                so2: 12,
                pm2_5: 13.600000381469727,
                pm10: 15,
                //us-epa-index: number,
                //example: 1
                //gb-defra-index	integer($int32)
                //example: 2        
            }  
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
                console.log(response.text().then(text => console.log(`Error in method GetCurrent : ${text}`)))
                reject(location)
            } 

            // 200
            resolve(response.json())
        })
    })        
}