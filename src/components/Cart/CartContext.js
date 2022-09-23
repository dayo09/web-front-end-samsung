import React, {useContext} from 'react';
const CartContext = React.createContext();

export const CartProvider = ({value, children})=>{
    return <CartContext.Provider value={value}>
        {children}
    </CartContext.Provider>
}

// Custom Hook
export const useCart = ()=>{
    const value = useContext(CartContext);
    if(!value){
        throw new Error(
            'useCart 혹은 CartProvider 컴포넌트 내부에서만 사용 가능합니다.'
        );
    }

    return value;
}