import { Location } from "../Objects/Location"
import { Current } from "../Objects/Current"

export type CurrentApiResponse = {
    location : Location,
    current : Current,
}