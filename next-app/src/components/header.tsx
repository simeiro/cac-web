import Image from 'next/image'
import localImage from '../../public/header/logo.png'
export default function Header() {
    return (
        <header className='pb-8 w-full  bg-white '>
            
            <div className='flex items-center justify-between  pb-2 '>
                <Image src={localImage} alt="C.A.C. logo" width={270} height={150} className=""/>
                <div className='text-2xl pt-6 font-moon'>
                    <a href="#about" className="pr-10 hover:text-blue-500 overscroll-auto">About</a>
                    <a href="#group" className="pr-10 hover:text-blue-500 scroll-behavior">Group</a>
                    <a href="#location" className="pr-10 hover:text-blue-500">Location&dates</a> 
                    <a href="#event" className='pr-20 hover:text-blue-500'>Event</a>
                </div>
                
                
            </div>
            <div className="w-full h-0.5 bg-blue-300"></div>
        </header>
    );
}
