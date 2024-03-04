import Link from 'next/link';
import About from '@/components/home/about';
import Group from '@/components/home/group/group';
import Product from '@/components/home/product';
import Location from '@/components/home/location';
import Event from "@/components/home/event/event";
import Activity from '@/components/home/activity/activity';
import Footer from "@/components/footer/footer";


async function getData() {
  const displayMedias = [];
    try{
        const data = await fetch('https://graph.facebook.com/v18.0/17841452314795723?access_token=EABkbTKMqk5IBOZBZAUzJMizQbjaXl7NCl9sV0yRm0UwyRbxudPY6um3dUJMna1YDdnD0PrMYoaRHDTOpCRjmOxPRMaJ2zk6XhQ7FqAgRaOceNsJ7MG0IUC6Sy8y0IVh3yIpPrSq7tAAKOdTg3YYYPUo8abau7bZASZCjjw53XtUU1IvZBVCxsJZCJ1EJOX3Ngf8u4WM7IZD&fields=media%7Bmedia_url,thumbnail_url,permalink%7D');
        const jsonData = await data.json();
        for(let i = 0; i < 1; i++){
            for(let i = 0; i < 25; i++){
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

    return displayMedias;

}

export default async function Page() {
  const data = await getData()
  return (
    <>
    <div className="flex justify-center pt-10">
      <div className="fixed z-10 inset-0 flex justify-center pt-20">
        <Product displayMedias={data}></Product>
      </div>
      <div className="z-20">
        <div id="about" className='pt-2'>
          <About></About>
        </div>

        <div id="group">
          <Group></Group>
        </div>

        <div id="location">
          <Location></Location>
        </div>
        <div id="event">
          <Event></Event>
        </div>
        <div>
        <Footer></Footer>
        </div>
      </div>
    </div>
    
    
    
    </>
  )
};


