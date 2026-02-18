import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartMeta, setCartMeta] = useState(null);

    return (
        <CartContext.Provider value={{ cartMeta, setCartMeta }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);