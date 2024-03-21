'use client'
import Image from 'next/image'
import { useRouter, useSearchParams } from 'next/navigation'

export default function SideNav() {
    // Hooks ----------------------------------->
    const router = useRouter()
    const searchParams = useSearchParams()
    
    // JSX ----------------------------------->
    return (
        <div className="w-fit h-screen bg-blue-900">
            <ul className="flex-col space-y-14 p-6 text-2xl font-bold text-center justify-center items-center">
                <li 
                    className='mb-24 text-4xl cursor-pointer'
                    onClick={()=> {
                        router.back()
                    }}
                >
                    ☀️ Urban Weather
                </li>             
                {/* <li className={document.location.pathname.includes('cities') ? 'text-white opacity-100' : 'opacity-2 transition ease-in-out delay-150 hover:opacity-100 hover:cursor-pointer hover:scale-110'}>
                    <Image 
                        className='ml-auto mr-auto'
                        alt='weather-icon'
                        src={require('../assets/general-icons/iweather.png')}
                        width={48}
                        height={48}
                   />
                <span>Cities</span>
                </li>
                <li className={document.location.pathname.includes('settings') ? 'text-white opacity-100' : 'opacity-25 invert transition ease-in-out delay-150 hover:opacity-100 hover:cursor-pointer hover:scale-110'}>
                    <Image 
                        className='ml-auto mr-auto'
                        alt='weather-icon'
                        src={require('../assets/general-icons/iweather.png')}
                        width={48}
                        height={48}
                   />
                    <span>Settings</span>
                </li> */}
            </ul>            
        </div>
    )
}