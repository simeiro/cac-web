import Image from "next/image";

export default function Location(){
    return(
        <>
            <div className="text-center pb-48">
                <h1 className="text-7xl font-moon">Location & Dates</h1>
                <p className="pb-5">活動場所、日時</p>
                <div className="flex flex-wrap justify-center">
                
                
                <div className="">
                    <Image src="/about/state2.jpg" alt="作業風景" width={640} height={360}></Image>
                </div>
                <div className="flex-row mx-28 items-center">
                    <p className="text-3xl">水曜日 10201情報処理教室 (13:15-19:30)</p>
                    <p className="text-3xl">木曜日 10202情報処理教室 (16:45-19:30)</p>
                {/* <p className="text-5xl pb-10 font-hiragino">デジタル系創作団体</p>  
                <p className="text-2xl">概要</p> */}
                <div className="text-sm pb-20">

                    <p></p>
                    
                </div>
                

                    {/* <p>電子計算機応用部、通称C.A.C.では日々デジタル系の創作を行っている団体です。
                        班と呼ばれるそれぞれの役割に分かれて活動しているのが特徴です。
                        班には、Programing, CG, Grafic, Musicの4つがあり、
                    </p> */}
                </div>
                    
            </div>
                {/* <div className="text-2xl">
                    <p>水曜日: 10201情報処理教室 (13:15-19:30)</p>
                    <p>木曜日: 10202情報処理教室 (16:45-19:30)</p>
                </div>
                <p className="text-sm">※活動時間中は自由に入退室可能</p>
                 */}
            </div>
        </>
    );
}
