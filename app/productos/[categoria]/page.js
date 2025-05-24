import productArray from "@/app/data/productos.json"
import ProductCard from "@/app/components/ProductCard"

export async function generateMetadata ({params, searchParams},parent){
    let {categoria} = await params;
    categoria = categoria =="all" ? "Productos" :categoria;
    return{
        title: `${categoria} | GMC`
    }
    
}
const Productos = async ({params}) =>{
    const {categoria} = await params;
        const items = categoria == "all" ? productArray : productArray.filter(item => item.categoria == categoria);
    return(
        <div className=" flex items-center content-center flex-col w-full">
            <div className=" flex flex-row items-center justify-between w-screen mb-10 mt-10">
                <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13"/>
                </svg>
                <h2 className="text-4xl text-gray-900 dark:text-white">{categoria}</h2>
            </div>
        <div className=" flex flex-row flex-wrap m-auto w-screen gap-10 justify-center">
{
    items.map(item =>(
        <ProductCard key={item.idx} item= {item}></ProductCard>
    ))
}
        </div>
        </div>
    )
    }
export default Productos;