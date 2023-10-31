import EachPart from './each_part'

export default function Group() {
    return (
        <>
        <div className="text-center">
            <h1 className="text-7xl ">Group</h1>
            <p>班活動</p>
        </div>
        <div>
            {/* <div className="flex-row  items-center">
                <div className="relative left-1/4 ">
                    <EachPart group="Programing" description="ゲームやシステムの制作・勉強、競技プログラミングなど幅広く活動" ></EachPart>
                </div>
                <div >
                    <EachPart group="Grafic" description="Unityとか"></EachPart>
                </div>
                
                
            </div> */}
            {/* <div className="flex justify-center items-center">
                <div className="relative right-1/4 translate-x-1/2 translate-y-1/2">
                    <EachPart group="CG" description="Unityとか "></EachPart>
                </div>
                <div>
                    <EachPart group="Music" description="Unityとか"></EachPart>
                </div>
            </div> */}
        </div>
        </>
    );
}
