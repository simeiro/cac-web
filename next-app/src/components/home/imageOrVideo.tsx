import Image from "next/image";

type Props = {
    url: string[];
}

export default function ImageOrVideo(props: Props) {
    if (props.url.length == 2){
        return(
            <div className="relative group">
                <a href={props.url[1]} className="relative block overflow-hidden">
                    <Image
                    className="px-4 py-10 transition-transform transform scale-100 group-hover:scale-125"
                    src={props.url[0]}
                    alt="ImageOrVideos"
                    width={560}
                    height={315}
                    />
                    <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50"></div>
                    <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">詳細を見る</p>
                </a>
            </div>
        );
    }else{
        return(
            <div className="relative group">
                <a href={props.url[1]} className="relative block overflow-hidden">
                    <video 
                        className="px-4 py-10 transition-transform transform scale-100 group-hover:scale-125"
                        src={props.url[0]}
                        playsInline
                        width={560}
                        height={315}
                        poster={props.url[2]}
                        autoPlay
                        muted
                        loop
                        >
                    </video>
                    <div className="absolute inset-0 bg-gray-700 opacity-0 group-hover:opacity-50"></div>
                    <p className="absolute inset-0 flex items-center justify-center text-white opacity-0 group-hover:opacity-100">詳細を見る</p>
                </a>
            </div>
            // <div>
            //     <a href={props.url[1]}>
            //         <video 
            //             className="mx-4"
            //             src={props.url[0]}
            //             playsInline
            //             width={480}
            //             height={270}
            //             poster={props.url[2]}
            //             autoPlay
            //             muted
            //             loop
            //             >
            //         </video>
            //     </a>
            // </div>
        )
    }
}
