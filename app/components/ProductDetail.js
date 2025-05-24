import Image from "next/image";
const ProductDetail = ({item}) =>{
    return(
        <div className="conatiner">
            <div className="container display-flex flex-row">
                
                <h2>{item.titulo}</h2>
            </div>
            <div className="container display-flex flex-row gap-10">
                <img src={item.imagen} />
                
            </div>
        </div>
    )
}
export default ProductDetail;