import { createContext, useReducer } from "react";

export const CartDispatchContext = createContext();
export const CartStateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            return [
                ...state,
                action.payload.item
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

function CartProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, []);

    return (
        <CartDispatchContext.Provider value={dispatch}>
            <CartStateContext.Provider value={state}>
                {children}
            </CartStateContext.Provider>
        </CartDispatchContext.Provider>
    );
}

export default CartProvider;