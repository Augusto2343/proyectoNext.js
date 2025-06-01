"use client"

import { createContext,useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) =>{
    const [ cart, setCart] = useState([])

    const addItem = () =>{
        let product= cart.find(item => item.id == id); 
        if(product) {
            product.quantity += 1;
            setCart([...cart])
        }
        else{
            product= {id:id, quantity:1};
            setCart([...cart,product]);
        }
        
        
    }
    const deleteItem = () =>{
        const items = cart.filter(item => item.id != id)
        setCart([...items])
        console.log("se elimino el producto #",id);
        
    }
    const clearCart = () =>{
        setCart ([])
    }
    const totalItems = () =>{
            return cart.reduce((acum,item) => acum += item.quantity, 0);
    }
    const sumItem = () =>{
        return cart.reduce((acum, item) => acum += item.price * item.quantity)
    }
    return <CartContext.Provider value ={{cart,addItem,deleteItem,clearCart,totalItems,sumItem}}>
            {children}
    </CartContext.Provider>
}
export default CartContextProvider