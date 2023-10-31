import Image from 'next/image'
import localImage from '../../public/header/logo.svg'

export default function Footer() {
    return (
        <footer className='flex'>
            <Image src={localImage} alt="C.A.C. logo"/>
            <h1 className='text-5xl font-bold'>京都産業大学 文化団体連盟所属 電子計算機応用部</h1>
        </footer>
    );
}
