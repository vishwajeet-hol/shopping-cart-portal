import React, {Fragment} from 'react';
import i18n from "../i18n";
import {orders} from "../mock/MockedOrders";
import HeaderComponent from "../components/HeaderComponent";
import {ListLayout, TableLayout, Cell} from "../components/StyledComponent";

const OrderConfirmation = ({cartItems}) => {
    
    return (
        <ListLayout>
            <HeaderComponent cartItems={cartItems}/>
            <TableLayout>
                {Object.values(orders).map((item)=> {
                    return (
                        <Fragment key={item.productId}>
                            <Cell><img className="image" src={item.imgUrl} alt={item.name}/></Cell>
                            <Cell>{item.name}</Cell>
                            <Cell>{item.currency} {item.price}</Cell>
                            <Cell>{item.status} {i18n.on} {item.date}</Cell>
                        </Fragment>
                    )
                })}
            </TableLayout>
        </ListLayout>
    )
};

export default OrderConfirmation;