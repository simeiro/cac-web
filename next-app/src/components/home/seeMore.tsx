type Props = {
    link: string;
}

export default function SeeMore(props: Props) {
    return (
        <>
            <a href={props.link}>
                <div className="flex items-center hover:text-white">
                    <div className="flex items-center justify-center w-50 h-10 border border-black opacity-100 hover:bg-black hover:border-black">
                        <p className="mx-2"> 詳しく見る </p>
                    </div>
                </div>
            </a>
        </>
        
    );
}
