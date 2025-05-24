import arrayProductos from "@/app/data/productos.json"
import ProductDetail from "@/app/components/ProductDetail";

export async function generateMetadata({params,searchParams},parent){
    const {slug} = await params;
    const item = arrayProductos.find(item => item.idx == slug)
    return{
        title:`${item.titulo} | GMC`
    }
}
const Productos = async({params}) =>{
        const {slug} = await params;
        const item = arrayProductos.find(item => item.idx == slug)

        return(
            <ProductDetail item = {item}></ProductDetail>
        )
}
export default Productos