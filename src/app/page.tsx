import SearchBar from "@/components/search-bar";
import RandomForecastPreview from "@/components/random-forecast-preview";
import SearchSettingsRoot from "@/components/search-settings/search-settings-root";
import SearchSettingsLang from "@/components/search-settings/search-settings-lang";
import SearchSettingsMeasurementScale from "@/components/search-settings/search-settings-measurement-scale";

export default function Home() {      

  // Jsx ----------------------------------->
  return (
    <main className="min-h-screen w-full ml-auto mb-auto mt-auto mr-auto">    
        <div className="w-fit h-fit py-24 ml-auto mr-auto transition ease-in-out delay-150">
          <span className="text-8xl font-bold">🌆 Urban Weather</span>
          <div className="w-fit mt-8 gap-x-2 text-2xl items-center justify-center">
            {/* Search */}
            <SearchBar />
            <SearchSettingsRoot>
              <SearchSettingsLang />
              <SearchSettingsMeasurementScale />
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