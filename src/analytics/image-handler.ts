// Onnly Handle Image Selection
export function DefineWeatherIcon (num : number) : string {            
    return ''
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
    if(countryName === 'United States') return 'https://flagsapi.com/US/flat/64.png' // !_Some other countries also have united states in their name, check solution later
    if(countryName.includes('Romania')) return 'https://flagsapi.com/RO/flat/64.png'
    if(countryName.includes('Singapore')) return 'https://flagsapi.com/SG/flat/64.png'        
    return ''
}