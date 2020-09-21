import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";
import {Header} from "./StyledComponent";
import i18n from "../i18n";

const HeaderComponent = ({cartItems}) => {

    useEffect(() => {
        var elmnt = document.getElementById("root");
        elmnt && elmnt.scrollIntoView();
    }, []);
    
    let history = useHistory();

    const handleGoToHome= () => {
        history.push("/");
    };

    const handleGoToOrders = () => {
        history.push("/orders");
    };

    const handleGoToCart = () => {
        history.push("/cart");
    };

    return (
        <Header isSticky={true}>
            <div className="left" onClick={handleGoToOrders}>{i18n.my_orders}</div>
            <div className="middle" onClick={handleGoToHome}>{i18n.x_mart}</div>
            <div className="right" onClick={handleGoToCart}>
                {i18n.cart} ({Object.keys(cartItems).length})
            </div>
        </Header>
    )
};

export default HeaderComponent;