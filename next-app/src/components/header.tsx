import Image from 'next/image'
import localImage from '../../public/header/logo.svg'
export default function Header() {
    return (
        <header>
            <Image src={localImage} alt="C.A.C. logo"/>
        </header>
    );
}