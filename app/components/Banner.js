import Image from "next/image";
const Banner = ({img,ladoEfecto,transparentacion,texto}) =>{
    return(
        <div className=" relative banner overflow-hidden">
        <div className={`relative w-screen ${ ladoEfecto == "right" ? `[mask-image:linear-gradient(to_right,black_${transparentacion},transparent)]` :  `[mask-image:linear-gradient(to_left,black_${transparentacion},transparent)]`} bg-[url(${img})]`}>
            <img src={img} className="w-screen" /> 
            </div>
            <h2 className="absolute top-1/2 left-1/9 z-999 text-gray-300 text-2xl transform -translate-x-1/2 -translate-y-1/2">{texto}</h2>

        </div>
    )
}

export default Banner;