import React, {Fragment, useState, useEffect} from 'react';
import i18n from "../i18n";
import {orders} from "../mock/MockedOrders";
import {ORDER_LIST_SORT_ORDER, SORT_ORDER_FUN} from "../consts";
import HeaderComponent from "../components/HeaderComponent";
import {
    ListLayout, 
    HeaderCell, 
    SubHeader, 
    TableLayout, 
    SortLayout,
    Cell
} from "../components/StyledComponent";

const OrderConfirmation = ({cartItems}) => {

    const {
        LOWEST_PRICE_FIRST,
        HIGHEST_PRICE_FIRST,
        RECENT_ORDERS_FIRST,
        OLD_ORDERS_FIRST
    } = ORDER_LIST_SORT_ORDER;
    const [orderList, setOrderList] = useState(orders);
    const [sortOrder, setSortOrder] = useState(RECENT_ORDERS_FIRST)

    useEffect(() => {
        const clonedOrders = [...orderList];
        const sortedOrderlist = clonedOrders.sort(SORT_ORDER_FUN[sortOrder]);
        setOrderList(sortedOrderlist);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sortOrder]);

    const onOrderChange = (event) => {
        setSortOrder(event.target.value);
    }
    
    return (
        <ListLayout data-testid="orders">
            <HeaderComponent cartItems={cartItems}/>
            <SubHeader marginTop={"20px"}>{i18n.my_orders} ({orders.length})</SubHeader>
            <SortLayout>
                <label>{i18n.sort_by}</label>
                <select value={sortOrder} onChange={onOrderChange}>
                    <option value={LOWEST_PRICE_FIRST}>{i18n.lowest_price_first}</option>
                    <option value={HIGHEST_PRICE_FIRST}>{i18n.highest_price_first}</option>
                    <option value={RECENT_ORDERS_FIRST}>{i18n.recent_orders_first}</option>
                    <option value={OLD_ORDERS_FIRST}>{i18n.old_orders_first}</option>
                </select>
            </SortLayout>
            <TableLayout columns={5}>
                <HeaderCell>{i18n.image}</HeaderCell>
                <HeaderCell>{i18n.name}</HeaderCell>
                <HeaderCell>{i18n.price}</HeaderCell>
                <HeaderCell>{i18n.date}</HeaderCell>
                <HeaderCell>{i18n.status}</HeaderCell>
                {orderList.map((item)=> {
                    return (
                        <Fragment key={item.productId}>
                            <Cell><img className="image" src={item.imgUrl} alt={item.name}/></Cell>
                            <Cell>{item.name} {item.quantity > 1 ? `(${item.quantity} ${i18n.items})` : ''} </Cell>
                            <Cell>{item.currency} {item.price}</Cell>
                            <Cell>{new Date(item.date).toDateString()}</Cell>
                            <Cell>{item.status}</Cell>
                        </Fragment>
                    )
                })}
            </TableLayout>
        </ListLayout>
    )
};

export default OrderConfirmation;