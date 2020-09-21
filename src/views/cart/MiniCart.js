import React from 'react';
import i18n from "../../i18n";
import {MiniCartLayout, Header} from "../../components/StyledComponent";

const MiniCart = (props) => {
    //Props
    const {cartItems} = props;

    const getTotalPrice = () => {
        let totalPrice = 0;
        Object.values(cartItems).forEach((item) => {
            totalPrice += (item.price * item.quantity);
        });
        return totalPrice;
    };
    
    // Render
    return (
        <MiniCartLayout>
            <Header><div className="left">{i18n.price_details}</div></Header>
            <div className="mini-cart-item">
                <div>{i18n.price} ({Object.keys(cartItems).length} {i18n.items})</div>
                <div>{i18n.currency} {getTotalPrice()}</div>
            </div>
            <div className="mini-cart-item">
                <div>{i18n.delivery_charges}</div>
                <div>{i18n.free}</div>
            </div>
            <div className="mini-cart-item bold">
                <div>{i18n.total_amount}</div>
                <div>{i18n.currency} {getTotalPrice()}</div>
            </div>
        </MiniCartLayout>
    )
};

export default MiniCart;