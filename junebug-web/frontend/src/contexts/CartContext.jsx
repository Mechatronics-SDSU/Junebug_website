import { createContext, useEffect, useReducer } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const initialState = [];


export const CartDispatchContext = createContext();
export const CartStateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                action.payload.item
            ]
        case "REMOVE_FROM_CART":
            console.log(state);
            console.log(action.payload);
            return [
                state.filter((item) => item !== action.payload)
            ]
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