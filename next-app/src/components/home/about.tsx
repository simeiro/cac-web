import Image from "next/image";
import localImage from "../../../public/about/state2.jpg"
// import Twitter from "@/components/home/twitter";
export default function About() {
    return (
        <div className="pb-48">
            <div className="text-center">
                <h1 className="text-7xl font-moon">About</h1>
                <p className="pb-36">C.A.C.とは？</p>
            </div>

            <div className="flex flex-wrap ">
                
                <div className="flex-row mx-24">
                    <p className="text-6xl pb-10 font-hina">デジタル系創作団体</p>  
                    {/* <p className="text-2xl">概要</p> */}
                    <div className="text-base pb-20 ">
                        <p>電子計算機応用部、通称CAC、は日々デジタル系の創作を行っている団体です。</p>
                        <p>異なる分野に分かれた「班」によって運営されており、</p>
                        <p>それぞれの班が特定の役割を担当しています。</p>
                        <p>Programing班はプログラム開発に情熱を傾け、</p>
                        <p>CG班はコンピューターグラフィックスの世界を探求し、</p>
                        <p>Grafic班はデザインと視覚的な表現に力を注いでいます。</p>
                        <p>そして、Music班は音楽制作とサウンドデザインに取り組んでいます。</p>
                        <p>この多様な専門性を持つ班が協力し、日々創造的なプロジェクトに取り組んでいます。</p>
                        <p>その成果物は、デジタル技術とアートの融合を通じて、新たな創造を実現しています。</p>
                        <p>CACは、デジタルの世界での探求心と創造力を共有する場として、</p>
                        <p>独自の存在感を示しています。</p>
                    </div>
                </div>
                <div>
                    <Image src="/about/state_board.jpg" alt="作業風景" width={600} height={450}></Image>
                </div>
                    
            </div>
            {/* <Twitter></Twitter> */}
        </div>
    );
}
