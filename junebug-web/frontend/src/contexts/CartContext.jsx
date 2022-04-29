import { createContext, useEffect, useReducer } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const initialState = [];

export const CartDispatchContext = createContext();
export const CartStateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            // const isOld = state.map((item) => item.name).includes(action.payload.item.name);
            // let cartItems = null;
            // if(isOld) {
            //     const items = state.map((item) => {
            //         if(item.name === action.payload.item.name){
            //             return {
            //                 ...item,
            //                 quantity: item.quantity + 1
            //             };
            //         }
            //         return item;
            //     });
            //     cartItems = [...items];
            // }
            // else {
            //     cartItems = [
            //         ...state, 
            //         action.payload.item
            //     ];
            // }
            return [
                ...state,
                // cartItems
                action.payload.item
            ];

        case "REMOVE_FROM_CART":
            return state.filter((item) => item.name !== action.payload.item.name);
            
        default:
            return state;
    }
};

export const addToCart = (dispatch, cartItem) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            item: cartItem
        }
    });
};

export const removeFromCart = (dispatch, cartItem) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
            item: cartItem
        }
    });
}

function CartProvider({ children }) {
    const [localCartItems, setLocalCartItems] = useSessionStorage(
        "cartItems",
        []
    );

    const localCartState = localCartItems || [];

    const [state, dispatch] = useReducer(reducer, localCartState);
    
    useEffect(() => {
        setLocalCartItems(state);
    }, [state, setLocalCartItems]);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
}

export default CartProvider;