import React,{createContext} from "react";
import all_product from '../Assets/all_product';

export const ShopContent = createContext();

const ShopContentProvider =(props)=>{
    const ContextValue = {all_product};
    return(
        <ShopContent.Provider value={ContextValue}>
            {props.children}
        </ShopContent.Provider>
    )
}
export default ShopContentProvider;
