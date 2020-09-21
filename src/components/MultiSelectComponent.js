import React from 'react';
import {MultiSelector} from "./StyledComponent";

const MultiSelectComponent = ({productId, cartItems, setCartItems, style}) => {

    const onMinus = () => {
        if (cartItems[productId].quantity > 1) {
            setCartItems((prevCartItems) => {
                return {
                    ...prevCartItems, 
                    [productId]: {
                        ...cartItems[productId], 
                        quantity: cartItems[productId].quantity - 1
                    }
                }
            });
        } else {
            const clonedCartItems = {...cartItems};
            delete clonedCartItems[productId];
            setCartItems(clonedCartItems);
        }
    }

    const onPlus = () => {
        setCartItems((prevCartItems) => {
            return {
                ...prevCartItems, 
                [productId]: {...cartItems[productId], quantity: cartItems[productId].quantity + 1}
            }
        });
    };

    return (
        <MultiSelector {...style}>
            <div className="minus" onClick={() => onMinus()}>-</div>
            <div className="current-quantity">{cartItems[productId].quantity}</div>
            <div className="plus" onClick={() => onPlus()}>+</div>
        </MultiSelector>
    )

};

export default MultiSelectComponent;