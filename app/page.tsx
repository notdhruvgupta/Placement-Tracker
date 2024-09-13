import Image from "next/image";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Content from "./Content";

export default function Home() {
  return (
    <div className='m-0'>
      <Navbar showLogin={true}/>
      <div className='md:flex'>
        <SideBar />
        <Content />
      </div>
    </div>
  );
}
