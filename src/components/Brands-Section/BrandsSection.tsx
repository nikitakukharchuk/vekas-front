import {BrandsApi} from "@/Mocs/BrandsApi";
import {BrandsType} from "@/types/BrandsType";
import Image from "next/image";

const BrandsSection = () => {
    return (
        <section className="brands flex items-center justify-center w-screen relative -translate-x-2/4 overflow-hidden">
            <div className="w-[300%] h-20 relative">
                <div className="w-[300%] flex items-center h-20 justify-around absolute gap-20 animate">
                    {BrandsApi.map(({id, imgSrc} : BrandsType) => (
                        <div key={id}>
                            <Image className='logo-image' src={imgSrc} alt='brand' width={250} height={150}/>
                        </div>
                    ))}
                    {BrandsApi.map(({id, imgSrc} : BrandsType, index: number) => (
                        <div key={index}>
                            <Image className='logo-image' src={imgSrc} alt='brand' width={250} height={100}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default BrandsSection