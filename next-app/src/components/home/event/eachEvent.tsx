type Props = {
    number: string;
    text: string;
}

export default function Event(props: Props) {
    return (
        <>
            <div className="container w-event mx-4 my-2 p-4">
                <div>

                </div>
                <div className=" flex flex-wrap ">
                        <div className="container w-44 flex">
                            <p className="text-7xl text-blue-400 ">{props.number}</p>
                            <p className="text-4xl text-blue-400 pt-6 ">月</p>
                        </div>
                        <p className=" text-3xl pt-10 font-zen">{props.text}</p>
                </div>  
                <div className="w-250 h-1 bg-blue-400"></div>
            </div>
        </>
        
    );
}
