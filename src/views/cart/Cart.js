import React, { Fragment, useEffect, useState } from 'react';
import i18n from '../../i18n';
import MiniCart from "./MiniCart";
import {VIEW} from "../../consts";
import {Header, GridLayout, CartLayout, EmptyCartLayout, Tile} from "../../components/StyledComponent";

const Cart = (props) => {
    // Variables
    const {cartItems, setCartItems, setView} = props;
    const isCartEmpty = Object.keys(cartItems).length === 0;
    
    // State variables
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    // Effects
    useEffect(() => {
        isOrderPlaced && setCartItems({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOrderPlaced]);

    useEffect(() => {
        var elmnt = document.getElementById("root");
        elmnt.scrollIntoView();
    }, []);

    // Event handlers
    const onRemoveItem = (productId) => {
        const clonedCartItems = {...cartItems};
        delete clonedCartItems[productId];
        setCartItems(clonedCartItems);
    }

    const onMinus = (productId) => {
        if (cartItems[productId].quantity > 1) {
            setCartItems((prevCartItems) => {
                return {
                    ...prevCartItems, 
                    [productId]: {...cartItems[productId], quantity: cartItems[productId].quantity - 1}
                }
            });
        } else {
            onRemoveItem(productId);
        }
    }

    const onPlus = (productId) => {
        setCartItems((prevCartItems) => {
            return {
                ...prevCartItems, 
                [productId]: {...cartItems[productId], quantity: cartItems[productId].quantity + 1}
            }
        });
    };

    const onContinueShopping = () => {
        setView(VIEW.LIST);
        setIsOrderPlaced(false);
    }

    const onSubmitOrder = () => {
        // hook to call actual web service with cart items data.
        alert(i18n.order_placed_alert.replace('{arg}', Object.keys(cartItems).length));
        setIsOrderPlaced(true);
    };

    const emptyCartView = () => {
        return (
            <EmptyCartLayout>
                <div>{isOrderPlaced ? i18n.order_placed_successfully : i18n.cart_is_empty}</div>
                <div className="continue-shopping" onClick={onContinueShopping}>{i18n.continue_shopping}</div>
            </EmptyCartLayout>
        );
    }

    // Render
    return (
        <GridLayout>
            <CartLayout>
                <Header id="header">
                    <div className="left">{i18n.cart} ({Object.keys(cartItems).length})</div>
                    <div className="right" onClick={onContinueShopping}>{i18n.continue_shopping}</div>
                </Header>
                <Fragment>
                    {isCartEmpty && emptyCartView()}
                    {Object.values(cartItems).map((item) => {
                        return (
                            <Tile key={item.productId}> 
                                <div className="item-details">
                                    <img className="image" src={item.imgUrl} alt={item.name}/>
                                    <div className="item-info">
                                        <div className="name">{item.name}</div>
                                        <div className="price">{item.currency} {item.price}</div>
                                        <div className="remove-item" onClick={() => onRemoveItem(item.productId)}>{i18n.remove_item}</div>
                                    </div>
                                </div>
                                <div className="quantity">
                                    <div className="minus" onClick={() => onMinus(item.productId)}>-</div>
                                    <div className="current-quantity">{item.quantity}</div>
                                    <div className="plus" onClick={() => onPlus(item.productId)}>+</div>
                                </div>
                            </Tile>
                        );
                    })}
                </Fragment>
                {!isCartEmpty && <Header isSticky={true}>
                    <div className="left">{i18n.deliver_to}: {i18n.address}</div>
                    <div className="right" onClick={onSubmitOrder}>{i18n.place_order}</div>
                </Header>}
            </CartLayout>
            {!isCartEmpty && <MiniCart cartItems={cartItems}/>}
        </GridLayout>
    )
};

export default Cart;