'use client'
import Image from "next/image";
import industriesSection from "@/components/Industries-Section/IndustriesSection";
import {IndustriesData} from "@/Mocs/IndustriesAPI";
import {IndustriesDataType} from "@/types/IndustriesDataType";
import {useState} from "react";

const Header = () => {
    const [hidden, setOpen] = useState('hidden')
    const [up , setDown] =useState('')
    const [navMobile, setNavOpen] = useState('hidden')

    const handleOpen = (): void => {
        setOpen('block')
        setDown('rotate-180 transition-all')
    }

    const handleNavOpen = (): void => {
        setNavOpen('block')
    }

    const handleNavClose = (): void => {
        setNavOpen('hidden')
    }

    const handleClose = (): void => {
        setOpen('hidden')
        setDown('')
    }

    return (
        <header className="py-10 px-10">
            <div className="flex justify-between items-center w-100 relative">
                <div className="mr-auto">
                    <Image src="/logo/logo.svg" alt="Logo" width='164' height='50'/>
                </div>
                <nav className="mx-auto md:hidden lg:block">
                    <ul className="flex xl:space-x-20 lg:space-x-10">
                        <li>
                            <a href="#" className="text-white hover:text-green-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="#about-us" className="text-white hover:text-green-600 transition-colors">About us</a>
                        </li>
                        <li>
                            <a href="#achievements" className="text-white hover:text-green-600 transition-colors">Achievements</a>
                        </li>
                        <li className='relative transition-all' onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                            <a href="#industries" className="flex items-center gap-2 text-white hover:text-green-600 transition-colors">
                                Industries
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${up} w-5 h-5`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </a>
                            <ul className={`absolute ${hidden} top-6 gap-1 left-0 z-10 bg-[#363535A6] p-5 flex flex-col rounded-md`}>
                                {IndustriesData.map(({title} : IndustriesDataType, index: number) => (
                                    <li className='hover:text-green-600 transition-colors cursor-pointer' key={index}>
                                        <a href="">{title}</a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a href="#contact" className="text-white hover:text-green-600 transition-colors">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <nav className={`${navMobile} transition-all p-5 w-full h-screen absolute top-0 bg-[#363535A6] z-10 bg-cover bg-center bg-blur backdrop-filter backdrop-blur-xl`}>
                    <ul className="flex flex-col items-end gap-5 z-10">
                        <li>
                            <button onClick={handleNavClose}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-green-600 transition-colors">Home</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-green-600 transition-colors">About us</a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-green-600 transition-colors">Achievements</a>
                        </li>
                        <li className='relative transition-all' onMouseEnter={handleOpen} onMouseLeave={handleClose}>
                            <a href="#" className="flex items-center gap-2 text-white hover:text-green-600 transition-colors">
                                Industries
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`${up} w-5 h-5`}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-green-600 transition-colors">Contact Us</a>
                        </li>
                    </ul>
                </nav>
                <div className='flex gap-10'>
                    <div className="ml-auto">
                        <button className="bg-green-500 hover:bg-green-600 transition-colors text-white py-2 px-4 rounded">
                            Order a call
                        </button>
                    </div>
                    <button onClick={handleNavOpen} className='md:block lg:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}

export default  Header;