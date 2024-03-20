import { useState } from "react"
import { Fragment } from "react"

export default function PopUpMessage(info : string, seconds : number) {            
    // Hooks ----------------------------------->
    const [enabled, setEnabled] = useState<Boolean>(true)

    // Functions ----------------------------------->
    setTimeout(() => {
        setEnabled(false)
    }, seconds * 1000)

    // Jsx ----------------------------------->
    return (        
        <Fragment>
            {
                enabled && 
                <div className="float-right rounded-lg p-10 align-center text-center font-bold text-white border-2-yellow gap-8">            
                    <span>{info}</span>                
                </div>  
            }            
        </Fragment>      
    )
}