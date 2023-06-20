'use client'
import {AchievementsListAPI} from "@/Mocs/AchievementsListAPI";
import {AchievementsItemType} from "@/types/AchievementsItemType";
import {useState} from "react";
import ModalForm from "@/components/ModalForm/ModalForm";
import Image from "next/image";

const OurAchievements = () => {
    const [open , setOpen] = useState(false)
    const closeModal = (): void => {
        setOpen(false)
    }
    return (
        <section id='achievements' className='xl:py-36 md:py-16 px-10'>
            <div className='mx-auto flex flex-col'>
                <div className='text-center'>
                    <div className='green-custom xl:text-3xl md:text-2xl'>Our achievements</div>
                    <div className='text-5xl xl:pt-8 md:pt-5 xl:pb-12 md:pb-9'>VEKAS makes our world safe and fair</div>
                    <div className='xl:text-lg md:text-sm'>As a system integrator, VEKAS provides everyone with a convenient tool for traceability of the products from raw materials to the counter.</div>
                </div>
                <div className='lg:grid lg:grid-cols-2 md:grid lg:grid-flow-dense md:grid-flow-col md:gap-10 md:overflow-y-auto xl:gap-10 lg:gap-5 xl:py-16 lg:py-12 md:pt-10'>
                    {AchievementsListAPI.map(({id, imageSrc, title, description, list} : AchievementsItemType) => (
                        <div className='achievements-card md:w-[600px] lg:w-full' key={id}>
                            <Image className='w-full' src={imageSrc} alt={`${title}`} width={1500} height={1000}/>
                            <div className='xl:p-8 md:p-5'>
                                <div className='green-custom xl:text-xl md:text-lg font-bold'>{title}</div>
                                <div className='xl:pt-5 md:pt-3 xl:text-lg md:text-base w-3/4'>{description}</div>
                                <ul className='list-disc xl:px-5 md:px-5 xl:py-2 md:py-1'>
                                    {list.map((item: string, index: number) => (
                                    <li className='xl:py-3 md:py-2 xl:text-lg md:text-sm' key={(index)}>{item}</li>
                                ))}</ul>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center lg:block md:hidden">
                    <button id='contact' onClick={() => setOpen(true)} type='button' data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="bg-green-500 hover:bg-green-600 xl:text-xl lg:text-lg text-white py-3 px-5 rounded">
                        Contact us
                    </button>
                    <ModalForm open={open} onClose={closeModal}/>
                </div>
            </div>
        </section>
    )
}

export default OurAchievements