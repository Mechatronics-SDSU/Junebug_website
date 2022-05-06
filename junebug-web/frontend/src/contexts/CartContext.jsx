import { createContext, useEffect, useReducer } from "react";
import useSessionStorage from "../hooks/useSessionStorage";

const initialState = [
    
];

export const CartDispatchContext = createContext();
export const CartStateContext = createContext();

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD_TO_CART":
            console.log(state);
            const isOld = state.map((product) => product.item.menuItem.itemID).includes(action.payload.item.menuItem.itemID);
            let cartItems = null;
            if (isOld) {
                const items = state.map((product) => {
                    if (product.item.menuItem.itemID === action.payload.item.menuItem.itemID) {
                        product.item.quantity = Number(product.item.quantity) + Number(action.payload.item.quantity);
                        product.item.itemPrice = Number(product.item.quantity)*parseFloat(product.item.menuItem.price.slice(1));
                    }
                    return product;
                });
                cartItems = [...items];
            }
            else {
                cartItems = [
                    ...state,
                    action.payload
                ];
            }
            return cartItems;


        case "REMOVE_FROM_CART":
            return state.filter((product) => product.item.menuItem.itemID !== action.payload.itemID);

        case "UPDATE_CART":
            state.map((product) => {
                if (product.item.menuItem.itemID === action.payload.id){
                    product.item.quantity = action.payload.quantity;
                    product.item.itemPrice = Number(product.item.quantity)*parseFloat(product.item.menuItem.price.slice(1));
                }
                return product;
            });
            return [...state];

        // case "GET_TOTAL":
        //     console.log(state);
        //     return 1;

        default:
            return state;
    }
};

export const addToCart = (dispatch, cartItem) => {
    dispatch({
        type: 'ADD_TO_CART',
        payload: {
            item: cartItem,
        }
    });
};

export const removeFromCart = (dispatch, cartItemID) => {
    dispatch({
        type: 'REMOVE_FROM_CART',
        payload: {
            itemID: cartItemID
        }
    });
}

export const updateCart = (dispatch, updateItem) => {
    dispatch({
        type: 'UPDATE_CART',
        payload: {
            id: updateItem.id,
            quantity: updateItem.quantity
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