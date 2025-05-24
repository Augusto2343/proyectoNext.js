import Image from "next/image";
import icon from "../../public/images/GMC-icon.svg"
const Logo = () =>{
    
    return(
        <div className="headerIcon">
            <Image src={icon} alt="GMC Logo" width={200} height={100} />
        </div>
    )
}
export default Logo;