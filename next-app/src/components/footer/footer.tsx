import Image from 'next/image'
import localImage from '../../../public/header/logo.svg'
import insragramSvg from '../../../public/footer/Instagram_logo_2016.svg'
import XSvg from "../../../public/footer/X_logo_2023.svg"

export default function Footer() {
    return (
        <footer className='pb-10'>
            <div className="w-full h-0.5 bg-blue-300"></div>

            <div className='flex items-center justify-center pb-4'>
                <Image src={localImage} alt="C.A.C. logo" width={270} height={150} className=""/>
                <h1 className='text-3xl font-semibold'>電子計算機応用部</h1>
            </div>
            <div className="flex items-center justify-center ">
                <a href="https://www.instagram.com/c_a_c_official">
                    <Image src={insragramSvg} alt="instagram" width={80} height={80} className="px-4 scale-100 hover:scale-125"></Image>
                </a>
                <a href="https://twitter.com/c_a_c_official">
                    <Image src={XSvg} alt="X" width={80} height={80} className="px-4 scale-100 hover:scale-125"></Image>
                </a>
                
                
            </div>
            
        </footer>
    );
}
