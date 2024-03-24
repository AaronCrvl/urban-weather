import SearchResult from "@/components/search-results"
import SideNav from "@/components/side-nav"

export default function SearchPage() {                
    return (
        <div className="flex w-full h-auto">
            <SideNav />
            <SearchResult />
        </div>
    )
}