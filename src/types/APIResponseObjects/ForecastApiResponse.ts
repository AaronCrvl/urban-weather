import { Location } from "../Objects/Location"
import { Current } from "../Objects/Current"
import { Forecast } from "../Objects/Forecast"

export type ForecastApiResponse = {
    location : Location,
    current : Current,
    forecast : Forecast
}