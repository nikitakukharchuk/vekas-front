import {HomeCounterData} from "@/Mocs/HomeCounterAPI";
import {HomeCounterType} from "@/types/HomeCounterType";
import CounterItem from "@/components/Counter-Section/CounterItem";

const CounterSection = () => {
    return (
        <section className='lg:py-32 md:py-20 px-10'>
            <div className='flex justify-between text-center'>
                {HomeCounterData.map(({counterId,counterText,count}: HomeCounterType) => (
                    <CounterItem key={counterId} count={count} description={counterText}/>
                ))}
            </div>
        </section>
    )
}

export default CounterSection