'use client'

export default function DashboardListItem(caption : string, value : string | number, imageRef : string) {
        
    // JSX ----------------------------------->
    return (
        <div>
            <div className="flex">
                <span className="text-4xl">{imageRef}</span>
                {/* <Image alt="item-icon" src={imageRef}  width={32} height={32} /> */}
                <span className="text-xl">{caption}</span>
            </div>                    
            <span className="text-4xl">{value}</span>
        </div>
    )
}