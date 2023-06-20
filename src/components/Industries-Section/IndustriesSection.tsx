'use client'

import {IndustriesData} from "@/Mocs/IndustriesAPI";
import {IndustriesDataType} from "@/types/IndustriesDataType";
import {useState} from "react";
import Image from "next/image";

const IndustriesSection = () => {
    const [activeItemId, setActiveItemId] = useState<number | null>(null)

    const handleItemHover = (itemId: number | null) : void => {
        setActiveItemId(itemId)
    }

    return (
        <section id='industries' className='px-10'>
            <div>
                <div className='lg:pt-36 md:pt-20 pb-16'>
                    <div className='green-custom text-3xl pb-8 lg:text-2xl lg:pb-5'>Industries</div>
                    <div className='text-3xl lg:w-5/12 md:w-full lg:text-2xl'>Our cutting-edge technology is already used in 7 industries</div>
                </div>
                    <div className='grid lg:grid-cols-2 md:grid-cols-1'>
                    <div>
                        <ul>
                            {IndustriesData.map(({id, title}: IndustriesDataType) => (
                                <li key={id} onMouseEnter={() => handleItemHover(id)} onMouseLeave={() => handleItemHover(null)} className='flex green-custom cursor-pointer justify-between xl:py-5 xl:px-7 industries-list-item xl:mb-5 md:py-3 md:px-5 md:mb-4'>
                                    <div className='xl:text-xl lg:text-lg'>{title}</div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-14 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M 15 6 L 21 12 m 0 0 l -6 6 M 21 12 H -13" />
                                    </svg>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='mx-auto'>
                        <ul className='qr-code relative'>
                            {IndustriesData.map(({id,title, imgSrc,iconSrc}: IndustriesDataType) => (
                                <li key={id} className='lg:block md:hidden'>
                                    <div>
                                        <div className={`transition-all Image-${title} absolute ${activeItemId === (id) ? 'brightness-100' : 'brightness-50'}`}><Image className={`industries-image ${activeItemId === id ? 'active-image' : ''}`} alt='Image' src={imgSrc} width={101} height={92}/></div>
                                        <div className={`Icon-${title} transition-all absolute ${activeItemId === id ? 'visible' : 'invisible'}`}><Image alt='Icon' className='w-auto h-auto industries-icon' src={iconSrc} width={40} height={40}/></div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default IndustriesSection;