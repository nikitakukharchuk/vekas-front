import Image from "next/image";
import {FooterContactsApi} from "@/Mocs/FooterContactsApi";
import {FooterContactsType} from "@/types/FooterContactsType";

const Footer = () => {
    return (
        <footer className='mt-36'>
            <div className='py-16 px-10 lg:flex lg:justify-between md:grid md:grid-cols-2 md:gap-10 container mx-auto'>
                <div className='lg:w-3/12'>
                    <div className='lg:mb-10 md:mb-4'>
                        <Image src="/logo/logo.svg" alt="Logo" width='164' height='50'/>
                    </div>
                    <div>
                        Our clients' safety and reputation are our major concerns. We minimize the possibility of counterfeiting your product.
                    </div>
                </div>
                <div className='flex flex-col lg:justify-between md:justify-center md:gap-3'>
                    {FooterContactsApi.map(({id, iconSrc, text} : FooterContactsType) => (
                        <div key={id} className='flex gap-3 w-auto h-auto'>
                            <Image src={iconSrc} alt='icon' width={14} height={14} className='w-auto h-auto'/>
                            <div className='hover:text-green-600 cursor-pointer transition-colors'>{text}</div>
                        </div>
                    ))}
                </div>
                <div className=''>
                    <nav className='h-full'>
                        <ul className='flex flex-col h-full lg:justify-between md:gap-3'>
                            <li>
                                <a href="#" className="text-white hover:text-green-600 transition-all">Home</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-green-600 transition-all">About us</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-green-600 transition-all">Achievements</a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-green-600 transition-all">Industries</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className='flex flex-col lg:justify-start md:justify-center'>
                    <div className='mb-3'>Follow us on social media</div>
                    <div className='flex gap-5 items-center'>
                        <a className='hover:scale-125 transition-all' target='_blank' href="https://www.youtube.com/channel/UCfqudXL5jkA9ipb7AYwfY7Q"><Image src="/footer/social/youtube.svg" alt="social" width={25} height={22} className='w-auto h-auto'/></a>
                        <a className='hover:scale-125 transition-all' target='_blank' href="https://www.instagram.com/vekas_automation/"><Image src="/footer/social/instagram.svg" alt="social" width={25} height={22} className='w-auto h-auto'/></a>
                        <a className='hover:scale-125 transition-all' target='_blank' href="https://www.linkedin.com/company/vekas/"><Image src="/footer/social/linkedin.svg" alt="social" width={25} height={22} className='w-auto h-auto'/></a>
                        <a className='hover:scale-125 transition-all' target='_blank' href="https://t.me/vekasautomationru"><Image src="/footer/social/telegram.svg" alt="social" width={25} height={22} className='w-auto h-auto'/></a>
                    </div>
                </div>
            </div>
            <div className='flex justify-between container mx-auto py-4 px-10'>
                <div>Privacy Policy</div>
                <div>Copyright 2023 © All Right Reserved Design by Digital Ant</div>
            </div>
        </footer>
    )
}

export default  Footer;