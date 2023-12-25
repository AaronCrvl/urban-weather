export function DefineIcon (num : number) {        
    if (num > 5 && num <= 10) return (require('../../assets/weather-icons/snowy.png'))
    else if (num > 10 && num <= 14) return(require('../../assets/weather-icons/sunny-cloudy.png'))
    else if (num >= 15 && num <= 20) return(require('../../assets/weather-icons/sunny-cloudy.png'))
    else if (num >= 21 && num <= 27) return(require('../../assets/weather-icons/sunny.png'))
    else if (num >= 28 && num <= 40) return(require('../../assets/weather-icons/sunny.png'))        
}

export function DefineForecastCss() {
    
}