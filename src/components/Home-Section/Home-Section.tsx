import Image from "next/image";

const HomeSection = () => {
    return (
        <section className='px-10'>
            <div className='section-home relative'>
                <Image src='/section-home/section-home.png' alt='Home-image' width={1600} height={100}/>
                <div className='absolute lg:top-1/4 md:top-20 lg:left-20 md:left-12 w-4/5'>
                    <div className='home-introtext xl:text-3xl lg:text-2xl md:text-xl xl:pb-5 lg:pb-3'>Track and trace</div>
                    <h1 className='home-title xl:text-6xl lg:text-4xl md:text-3xl lg:w-4/6'>Innovative end-to-end traceability system</h1>
                </div>
                <div className='pt-10 flex'>
                    <div className='home-fakes lg:text-xl md:text-base whitespace-nowrap'>No more fakes</div>
                    <div className='home-description lg:w-4/12 md:w-full lg:text-sm xl:text-lg md:text-xs'>Our clients' safety and reputation are our major concerns. We minimize the possibility of counterfeiting your product.</div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection