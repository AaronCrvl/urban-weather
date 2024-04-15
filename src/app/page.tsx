import SearchBar from "@/components/search-bar";
import RandomForecastPreview from "@/components/random-forecast-preview";
import SearchSettingsRoot from "@/components/search-settings/search-settings-root";
import SearchSettingsLang from "@/components/search-settings/search-settings-lang";
import SearchSettingsTemperatureUnit from "@/components/search-settings/search-settings-measurement-scale";
import bg from "../assets/wave.svg"

export default function Home() {      
  // Functions ----------------------------------->
  () => {
    if(localStorage.getItem('lang') === null)
      localStorage.setItem('lang', 'en')   

      if(localStorage.getItem('scale') === null)
        localStorage.setItem('scale', 'Cº')   
  }
  
  // Jsx ----------------------------------->
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">    
        <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">          
          <div className="text-8xl font-extrabold ...">            
            <span className="capitalize bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-transparent overline bg-gradient-to-r from-blue-700 from-blue-500 to-white">
              urban weather
            </span>
          </div>
          <div className="w-fit mt-8 gap-x-2 text-2xl items-center justify-center">
            {/* Search */}
            <SearchBar />

            {/* Search Settings */}            
            <SearchSettingsRoot>
              <SearchSettingsLang />
              <SearchSettingsTemperatureUnit />
            </SearchSettingsRoot>            
            
            {/* Forecasts Preview */}
            <div className="mt-36">
              <RandomForecastPreview />
            </div>
          </div>
        </div>                      
    </main>
  )
}