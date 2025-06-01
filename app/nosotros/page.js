import Image from "next/image";
import Banner from "../components/Banner";
const Nosotros = () =>{
    return(
        <section className=" relative w-screen h-full  mb-10">
            <Banner texto={"Nosotros"} transparentacion={"20%"} ladoEfecto={"left"} img={"https://www.gmc.com/content/dam/gmc/na/us/english/index/vehicles/2025/trucks/sierra-hd/overview/exterior/2025-sierra-hd-mov-exterior-header-l-2500x1000-25PGSRHD00093.jpg?imwidth=2400"} >
            </Banner>
        </section>
    )
}
export default Nosotros;