import Image from 'next/image'
import cacLogo from '../../public/header/logo.png'

/**
 * ヘッダー部分です。
 * C.A.C.のロゴ画像
 * サイトのナビゲーションメニュー
 * 青のライン
 * を表示させます。
 * @returns 
 */
export default function Header() {
    return (
        <div className='pb-8 w-full  bg-white'>
            <div className='flex items-center justify-between  pb-2 '>
                <Image src={cacLogo} alt="C.A.C. logo" width={270} height={150} className="pr-10"/>
                <div className='text-2xl pt-6 font-moon'>
                    <a href="#about" className="pr-10 hover:text-blue-500 overscroll-auto">About</a>
                    <a href="#group" className="pr-10 hover:text-blue-500 scroll-behavior">Group</a>
                    <a href="#location" className="pr-10 hover:text-blue-500">Location&dates</a> 
                    <a href="#event" className='pr-20 hover:text-blue-500'>Event</a>
                </div>
                
                
            </div>
            <div className="w-full h-0.5 bg-blue-300"></div>
            
        </div>
    );
}
