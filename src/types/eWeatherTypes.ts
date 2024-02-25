type WeatherTypes = 'sunny' | 'rainy'| 'windy' | 'snowy' | 'cloudy' | 'stormy' | 'foggy' | 'humid' | 'default'
type WeatherState = {    
    weather : WeatherTypes
    relevance : number    
}

export type WeatherType = {
    mainWeatherState : WeatherState,
    secondaryWeatherState : WeatherState,
}