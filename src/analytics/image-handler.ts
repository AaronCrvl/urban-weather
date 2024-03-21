import { WeatherAnalytics } from "./forecast-analytics";
import { Current } from "@/types/Objects/Current";
import { Location } from "@/types/Objects/Location";
import { Forecast } from "@/types/Objects/Forecast";

//! Only Handle Image File Selection
export function GetWeatherIcon (weatherData : {
    location : Location,
    current : Current,
    forecast : Forecast
}) : string {            
    const res = WeatherAnalytics(weatherData)        
    switch(res.mainWeatherState.weather ) {
        case 'sunny':
            return '../assets/weather-icons/sunny.png'                      
        case 'rainy':
            return '../assets/weather-icons/rainy.png'        
        case 'windy':
            break;    
        case 'snowy':
            return '../assets/weather-icons/snowy.png' 
        case 'cloudy':
            return '../assets/weather-icons/cloudy.png'     
        case 'stormy':
            break;
        case 'foggy':
            break;
        case 'humid':
            break;
        default : 
            return '../assets/weather-icons/sunny.png' 
    }    

    return '../assets/weather-icons/sunny.png' 
}

export function GetCountryFlagCode(countryName : string) : string {
    if(countryName.includes('Brazil')) return 'https://flagsapi.com/BR/flat/64.png'
    if(countryName.includes('Canada')) return 'https://flagsapi.com/CA/flat/64.png'
    if(countryName.includes('Colombia')) return 'https://flagsapi.com/CO/flat/64.png'
    if(countryName.includes('Costa Rica')) return 'https://flagsapi.com/CR/flat/64.png'
    if(countryName.includes('Croatia')) return 'https://flagsapi.com/HR/flat/64.png'
    if(countryName.includes('Ecuador')) return 'https://flagsapi.com/EC/flat/64.png'
    if(countryName.includes('Finland')) return 'https://flagsapi.com/FI/flat/64.png'
    if(countryName.includes('France')) return 'https://flagsapi.com/FR/flat/64.png'    
    if(countryName.includes('Germany')) return 'https://flagsapi.com/DE/flat/64.png'
    if(countryName.includes('Japan')) return 'https://flagsapi.com/JP/flat/64.png'
    if(countryName.includes('Nigeria')) return 'https://flagsapi.com/NG/flat/64.png'
    if(countryName.includes('Mexico')) return 'https://flagsapi.com/MX/flat/64.png'       
    if(countryName === 'United States') return 'https://flagsapi.com/US/flat/64.png' // !_Some countries also have united states in their name, check for a solution later
    if(countryName.includes('Romania')) return 'https://flagsapi.com/RO/flat/64.png'
    if(countryName.includes('Singapore')) return 'https://flagsapi.com/SG/flat/64.png'        
    return ''
}