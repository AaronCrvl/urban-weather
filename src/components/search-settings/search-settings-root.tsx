'use client'

export default function SearchSettingsRoot(props : any) {
    return <div 
                className="flex opacity-70 hover:opacity-90 gap-x-10 w-auto p-3 mt-10 cursor-pointer rounded-lg text-center align-center items-center justify-center"
            >
                {props.children}
            </div>
}