import Image from "next/image";
import localImage from "../../../public/about/作業風景.png"
export default function About() {
    return (
        <><div className="text-center">
            <h1 className="text-7xl ">About</h1>
            <p className="pb-20">C.A.C.とは？</p>
        </div>
        <div className="flex">
            <div className="">
                <Image src={localImage} alt="作業風景" ></Image>
                
            </div>
            <p className="text-5xl"> デジタル系創作団体</p>
            
            {/* <div className="flex-row">
                <p className="relative left-1/8 text-5xl"> デジタル系創作団体</p>
                <p className="relative left-1/8 text-5xl"> デジタル系創作団体</p>
            </div> */}
            
                {/* <div className="flex-row">
                    <p> デジタル系創作団体</p>
                </div> */}
                
        </div></>
    );
}
