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
    <Banner texto={"Cambiando las reglas"} transparentacion={"20%"} ladoEfecto={"left"} img="https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2025/trucks/sierra-hd/overview/interior/2025-sierra-hd-mov-interior-header-l-2500x1000-25PGSRHD00146.jpg?imwidth=2400"></Banner>
    </>
  );
}
