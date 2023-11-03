import EachEvent from "@/components/home/event/eachEvent";
import Image from "next/image";

export default function Event() {
    return (
        <>
            <div className="pb-24">
                <div className="text-center">
                    <h1 className="text-7xl font-moon">Event</h1>
                    <p>年間行事</p>
                </div>
                <div className="flex flex-wrap">
                    <div>
                        <EachEvent number="4" text="新歓祭"></EachEvent>
                        <EachEvent number="6" text="新入生歓迎コンパ"></EachEvent>
                        <EachEvent number="8" text="夏合宿 / 制作合宿"></EachEvent>
                        <EachEvent number="9" text="サタデージャンボリー"></EachEvent>
                        <EachEvent number="11" text="神山祭 / 逆襲コンパ"></EachEvent>
                        <EachEvent number="12" text="幹部改選 / 追い出しコンパ"></EachEvent>
                        <EachEvent number="3" text="春合宿 / 制作合宿 / 送別会"></EachEvent>
                    </div>
                    <div className="container w-event-image">
                        <div className="grid justify-items-end">
                            <Image src="/about/state_board.jpg" alt="作業風景" width={320} height={160} className="pb-20"></Image>
                        </div>
                        <Image src="/about/state_board.jpg" alt="作業風景" width={320} height={160} className="pb-20"></Image>
                        <div className="grid justify-items-end">
                            <Image src="/about/state_board.jpg" alt="作業風景" width={320} height={160} className="pb-20"></Image>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
        
    );
}
