'use client'

import { DATAPRODUCT } from "@/data/data";
import { createContext, useContext } from "react";

const ProductsContex = createContext();

export const ProductsProvider = ({children}) => {
    const getProductsBySlug = (slug) => {
        return DATAPRODUCT.find(item => item.slug === slug)
    }

    return(
        <ProductsContex.Provider value={{products:DATAPRODUCT, getProductsBySlug}}>
            {children}
        </ProductsContex.Provider>
    )
}

export const useProducts = () => useContext(ProductsContex)


