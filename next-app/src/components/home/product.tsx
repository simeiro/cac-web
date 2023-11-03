/* eslint-disable react/jsx-key */
import ImageOrVideo from "@/components/home/imageOrVideo";
import { InferGetServerSidePropsType, GetServerSideProps } from "next";
type Props = {
    displayMedias: any[][];
}

export const getServerSideProps: GetServerSideProps<Props>= (async (context) => {

    const displayMedias = [];
    try{
        const data = await fetch('https://graph.facebook.com/v18.0/17841452314795723?access_token=EABkbTKMqk5IBOZBZAUzJMizQbjaXl7NCl9sV0yRm0UwyRbxudPY6um3dUJMna1YDdnD0PrMYoaRHDTOpCRjmOxPRMaJ2zk6XhQ7FqAgRaOceNsJ7MG0IUC6Sy8y0IVh3yIpPrSq7tAAKOdTg3YYYPUo8abau7bZASZCjjw53XtUU1IvZBVCxsJZCJ1EJOX3Ngf8u4WM7IZD&fields=media%7Bmedia_url,thumbnail_url,permalink%7D');
        const jsonData = await data.json();
        for(let i = 0; i < 1; i++){
            for(let i = 1; i < 25; i++){
                if (jsonData["media"]["data"][i]["thumbnail_url"]){
                    displayMedias.push([
                        jsonData["media"]["data"][i]["media_url"], 
                        jsonData["media"]["data"][i]["permalink"],
                        jsonData["media"]["data"][i]["thumbnail_url"],
                    ]);
                }else{
                    displayMedias.push([
                        jsonData["media"]["data"][i]["media_url"],
                        jsonData["media"]["data"][i]["permalink"],
                    ]);
                }
            }
        }

    }catch(e){
        console.log(e);
    }
    console.log(displayMedias);
    console.log("fdas")
  
    const props: Props = {
        displayMedias: displayMedias,
    };
  
    return {
        props: props,
    };
})



export default function Product(props: Props) {
    

    return (
        <>
        
            <div className="flex flex-wrap justify-center items-center">
                {props.displayMedias.map((item) =>(
                    <ImageOrVideo url={item}></ImageOrVideo>
                ))}
            </div>

        </>
        
    );
}
