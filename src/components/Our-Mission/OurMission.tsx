'use client'
import {useEffect, useState} from "react";
import {MissionType} from "@/types/MissionType";

const coefficients: MissionType = {
    October: -1,
    November: -1,
    December: 1.1,
    January: -1,
    February: -1,
    March: 1.1,
    April: 1.2,
    May: 1.5,
    June: 1.5,
    July: 1.5,
    August: 1.4,
    September: 1.2,
};

const OurMission = () => {
    const [products, setProducts] = useState<number>(60480000000);
    const increment: number = 96000
    const [coefficient, setCoefficient] = useState<number>(1);

    useEffect(() => {
        const currentDate = new Date();
        const month = currentDate.toLocaleString('en-US', { month: 'long' });

        setCoefficient(coefficients[month]);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setProducts((prevProducts) => products + increment * coefficient);
        }, 1000);

        return () => clearInterval(interval);
    }, [increment, coefficient, products]);

    const productsNew: string = products.toLocaleString()
    return (
        <section className='xl:py-36 lg:py-24 md:py-16 px-10'>
            <div>
                <div className='relative xl:pb-10 md:pb-6'>
                    <img className='w-full' src='/our-mission/mission-up.png' alt='our-mission-up'/>
                    <div className='absolute xl:top-32 lg:top-16 md:top-6 left-10'>
                        <div className='xl:text-3xl lg:text-3xl md:text-2xl green-custom xl:pb-8 lg:pb-5 md:pb-3'>Our mission</div>
                        <div className='xl:text-3xl lg:text-2xl md:text-xl lg:10/12 md:w-5/6'>Each VEKAS employee is a human and a consumer. Therefore, we strive for honest consumption, without counterfeit and low-quality products</div>
                    </div>
                </div>
                <div className='relative'>
                    <img className='w-full' src='/our-mission/mission-down.png' alt='our-mission-up'/>
                    <div className='absolute xl:top-28 lg:top-20 md:top-8 left-10 lg:flex md:grid md:grid-cols-1 md:gap-5'>
                        <div className='xl:text-5xl whitespace-nowrap lg:text-4xl md:text-2xl flex items-center'>marked product</div>
                        <div className='2xl:text-9xl xl:text-8xl md:text-6xl w-10/12 font-bold'>{productsNew}</div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurMission