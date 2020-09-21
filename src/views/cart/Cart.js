import React, { Fragment, useEffect, useState } from 'react';
import i18n from '../../i18n';
import MiniCart from "./MiniCart";
import { useHistory } from "react-router-dom";
import HeaderComponent from "../../components/HeaderComponent";
import MultiSelectComponent from "../../components/MultiSelectComponent";
import {userDetails} from "../../mock/MockedUserDetails";
import {
    SubHeader, 
    GridLayout, 
    CartLayout, 
    EmptyCartLayout, 
    Tile
} from "../../components/StyledComponent";

const Cart = ({cartItems, setCartItems}) => {

    let history = useHistory();
    const isCartEmpty = Object.keys(cartItems).length === 0;
    const [isOrderPlaced, setIsOrderPlaced] = useState(false);

    useEffect(() => {
        isOrderPlaced && setCartItems({});
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOrderPlaced]);

    const onRemoveItem = (productId) => {
        const clonedCartItems = {...cartItems};
        delete clonedCartItems[productId];
        setCartItems(clonedCartItems);
    }

    const onContinueShopping = () => {
        setIsOrderPlaced(false);
        history.push("/");
    }

    const onSubmitOrder = () => {
        // hook to call actual web service with cart items data.
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

    return (
        <Fragment>
            <HeaderComponent cartItems={cartItems}/>
            <GridLayout data-testid="cart">
                <CartLayout isCartEmpty={isCartEmpty}>
                    <SubHeader>{i18n.my_cart} ({Object.keys(cartItems).length})</SubHeader>
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
                                            <div className="remove-item" 
                                                onClick={() => onRemoveItem(item.productId)}>
                                                {i18n.remove_item}
                                            </div>
                                        </div>
                                    </div>
                                    <MultiSelectComponent 
                                        productId={item.productId}
                                        cartItems={cartItems}
                                        setCartItems={setCartItems}
                                    />
                                </Tile>
                            );
                        })}
                    </Fragment>
                    {!isCartEmpty && <SubHeader isSticky={true}>
                        <div className="left">{i18n.deliver_to}: {userDetails.address}</div>
                        <div className="right" onClick={onSubmitOrder}>{i18n.place_order}</div>
                    </SubHeader>}
                </CartLayout>
                {!isCartEmpty && <MiniCart cartItems={cartItems}/>}
            </GridLayout>
        </Fragment>
    )
};

export default Cart;