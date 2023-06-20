const AboutUsSection = () => {
    return (
        <section id='about-us' className="w-full bg-[url('/section-about-us/about-us.png')] bg-center about-us-section">
            <div className='text-center grid content-around h-full'>
                <div>
                    <div className='green-custom text-3xl pb-5'>About Us</div>
                    <div className='about-introtext px-20 text-5xl'>VEKAS – We are always here to protect your brand</div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <div className='about-description xl:text-xl pb-12 md:w-3/4 lg:w-2/4 lg:text-lg'>VEKAS system allows anyone to instantly verify the authenticity of various products. Applying a DataMatrix code to your products is a solution that protects manufacturers' brands and keeps their consumers safe.</div>
                    </div>
                    <div>
                        <button className='bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded xl:text-xl lg:text-lg'>Submit a request</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUsSection