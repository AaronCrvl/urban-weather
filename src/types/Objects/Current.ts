export type Current = {
    last_updated_epoch:number,
    //example: 1658522700
    last_updated:string,
    //example: 2022-07-22 16:45
    temp_c:number,
    //example: 34.4
    temp_f:number,
    //example: 93.9
    is_day:number,
    //example: 1
    condition : {
        text: string,
        //example: Partly cloudy
        icon: string,
        //example: //cdn.weatherapi.com/weather/64x64/day/116.png
        code: number,
        //example: 1003     
    },
    wind_mph:number,
    //example: 16.1
    wind_kph:number,
    //example: 25.9
    wind_degree:number,
    //example: 180
    wind_dir:string,
    //example: S
    pressure_mb:number,
    //example: 1011
    pressure_in:number,
    //example: 29.85
    precip_mm:number,
    //example: 0
    precip_in:number,
    //example: 0
    humidity:number,
    //example: 31
    cloud:number,
    //example: 75
    feelslike_c:number,
    //example: 37
    feelslike_f:number,
    //example: 98.6
    vis_km:number,
    //example: 16
    vis_miles:number,
    //example: 9
    uv:number,
    //example: 8
    gust_mph:number,
    //example: 11.6
    gust_kph:number,
    //example: 18.7
    air_quality : {
        co: number,
        //example: 293.70001220703125
        no2:number,
        //example: 18.5
        o3:	number,
        //example: 234.60000610351562
        so2:number,
        //example: 12
        pm2_5:number,
        //example: 13.600000381469727
        pm10:number,
        //example: 15
        //us-epa-index: number,
        //example: 1
        //gb-defra-index	integer($int32)
        //example: 2        
    }     
}