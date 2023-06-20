import {CounterItemType} from "@/types/CounterItemType";

const CounterItem = ({count, description}: CounterItemType) => {
    return (
        <div>
            <div className='lg:text-5xl md:text-4xl pb-5'>{count}</div>
            <div className='lg:text-3xl md:text-xl green-custom'>{description}</div>
        </div>
    )
}

export default CounterItem