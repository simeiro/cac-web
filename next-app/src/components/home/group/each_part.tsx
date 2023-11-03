
import Image from "next/image";
import SeeMore from "@/components/home/seeMore"

type Props = {
    group : string;
    description : string;
    link : string;
    image: string;
}

export default function EachPart(props: Props) {
    return (
        <>
            
            <div className="">
                <div className="px-4 py-10">
                    <p className="text-5xl font-moon">{props.group}</p>
                    <p className="break-normal">{props.description}</p>
                    <div className="relative block overflow-hidden group">
                        
                        <Image src={props.image} alt="" width={592} height={333} className="w-full h-full transition-transform transform scale-100 group-hover:scale-125"/>
                        
                        <a href={props.link}>
                            <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50"></div>
                            <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">詳細を見る</p>
                        </a>
                        
                    </div>
                </div>
            </div>
            
        </>
    );
}
