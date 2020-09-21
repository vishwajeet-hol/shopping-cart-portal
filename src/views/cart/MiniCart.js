import React from 'react';
import i18n from "../../i18n";
import {MiniCartLayout, SubHeader} from "../../components/StyledComponent";

const MiniCart = ({cartItems}) => {

    const getTotalPrice = () => {
        let totalPrice = 0;
        Object.values(cartItems).forEach((item) => {
            totalPrice += (item.price * item.quantity);
        });
        return totalPrice;
    };
    
    return (
        <MiniCartLayout data-testid="miniCart">
            <SubHeader>{i18n.price_details}</SubHeader>
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