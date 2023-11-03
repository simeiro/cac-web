import Link from 'next/link';
import About from '@/components/home/about';
import Group from '@/components/home/group/group';
import Product from '@/components/home/product';
import Location from '@/components/home/location';
import Event from "@/components/home/event/event";
import Activity from '@/components/home/activity/activity';
import Footer from "@/components/footer/footer";

const Page = () => {
  return (
    <>
    <div className="relative  flex h-screen pt-4">
      <div className="absolute z-10 inset-0 flex justify-center pt-4">
        <Product ></Product>
      </div>
      <div className="relative z-20 ">
        <div id="about" className='pt-2'>
          <About ></About>
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

export default Page;
