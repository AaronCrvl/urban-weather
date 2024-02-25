import { ForecastApiResponse } from "@/types/APIResponseObjects/ForecastApiResponse";
import { WeatherType } from "@/types/eWeatherTypes";

export function WeatherAnalytics(data : ForecastApiResponse) : WeatherType {
    let weather : WeatherType = {
        mainWeatherState : {
            weather : 'default',
            relevance : 0
        },
        secondaryWeatherState : {
            weather : 'default',
            relevance : 0
        },
    }    

    // Sunny
    if(isSunny(data.forecast.forecastday, data.current)) {        
        if(weather.mainWeatherState.weather === 'default') {
            weather.mainWeatherState.weather = 'sunny'
            weather.mainWeatherState.relevance = rainyDay(data.forecast.forecastday) ? 5 : 10 
        }       
    }  

    // Rainy
    if(isRainy(data.forecast.forecastday, data.current)) {
        if(rainyDay(data.forecast.forecastday)) {
            if(weather.mainWeatherState.weather === 'default') {
                weather.mainWeatherState.weather = 'rainy'
                weather.mainWeatherState.relevance = 10 
            }
            else if(weather.secondaryWeatherState.weather === 'default') {            
                weather.mainWeatherState.weather = 'rainy'
                weather.mainWeatherState.relevance = 10 
            } 
        }       
    }  

    // Quick Check
    if(weather.mainWeatherState.weather !== 'default' && weather.secondaryWeatherState.weather !== 'default') return weather

    // Windy
    // Snowy
    // Cloudy
    // Stormy
    // Foggy
    // Humid

    return weather    
}

// Current Time Check -------------------------------------------------->
function isSunny(forecastday : any, current : any) : boolean {    
    // Current Check
    if(!current.is_day) return false
    if(current.feelslike_c <= 25) return false
    if(current.totalprecip_mm >= 20) return false

    // Forecast Average Check
    if(forecastday.astro.is_sun_up) return false
    if(forecastday.day.avgtemp_c < 25) return false    
    
    return false        
}

function isRainy(forecastday : any, current : any) : boolean {
    // Current Check
    if(!current.is_day) return false

    // 50 mm means 50 L for each m^2
    // totalprecip_mm === 20 - thin rain
    // totalprecip_mm === 25 - medium rain
    // totalprecip_mm === 30 - heavy rain
    if(current.totalprecip_mm <= 15) return false 

    return false
}

// During The Day Check -------------------------------------------------->
function rainyDay(forecastday : any) { 
    // The api return 24 hour forecasts, one for each hour oof the day
    let significantRainDuringTheDay = false
    let rainCounter = 0

    forecastday.hour.map((hourForecast : any) => {
        // 12 hours analysis
        if(!hourForecast.is_day) return 
        if(hourForecast.will_it_rain === 1) ++rainCounter
    })

    significantRainDuringTheDay = rainCounter >= 4
    return significantRainDuringTheDay ? true : false
}