'use client'

import Image from 'next/image'

export default function SideNav() {
    // JSX ----------------------------------->
    return (
        <div className="w-auto h-screen bg-lime-400">
            <ul className="flex-col space-y-14 p-6 divide-y text-4xl font-bold">
                <li className='grow'>                    
                    {/* <Image 
                        alt=""
                        src="/assets/icons/iweather.png"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <span>Weather</span>
                </li>
                <li>
                    {/* <Image 
                        alt=""
                        src="/assets/icons/iweather.png"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <span>Cities</span>
                </li>
                <li>                    
                    {/* <Image 
                        alt=""
                        src="/assets/icons/iweather.png"
                        layout="fill"
                        objectFit="cover"
                    /> */}
                    <span>Settings</span>
                </li>
            </ul>            
        </div>
    )
}