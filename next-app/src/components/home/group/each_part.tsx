type Props = {
    group : string;
    description : string;
}

export default function EachPart(props: Props) {
    return (
        <div>
            <p className="bg-gray-500 text-white text-5xl ">{props.group}</p>
            <p>{props.description}</p>
        </div>
    );
}