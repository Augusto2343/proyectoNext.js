import Image from "next/image";
import Header from "./components/Header"
import Banner from "./components/Banner"
import Carousel from "./components/carousel";
import arrayNovedades from "./data/productosNovedades"
export default function Home() {
  
  return (
    <>
    <Header/>
    <Carousel imgArray={ arrayNovedades}></Carousel>
    </>
  );
}
