import Image from "next/image";
const Banner = ({img,efecto}) =>{
    return(
        <div className={`${efecto} mask-r-from-black mask-r-from-50% mask-r-to-transparent bg-[url(../${img})]`}></div>
    )
}

export default Banner;