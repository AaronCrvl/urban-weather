import { useState } from "react"

export default function PopUpMessage(info : string, seconds : number) {            
    // Hooks ----------------------------------->
    const [enabled, setEnabled] = useState<Boolean>(false)

    // Functions ----------------------------------->
    setTimeout(() => {
        setEnabled(false)
    }, seconds * 1000)

    // Jsx ----------------------------------->
    return (        
        <div
            className="float-right rounded-lg p-10 align-center text-center font-bold text-white border-2-yellow gap-8"
            style={{display: enabled ? 'block' : 'none'}}
        >
            <span>i</span>
            <span>{info}</span>                
        </div>        
    )
}