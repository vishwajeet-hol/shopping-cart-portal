import React, {useState, useEffect, Fragment} from 'react';
import i18n from "../i18n";
import {VIEW} from "../consts";
// This list will come from actual web service.
import {productList} from "../mock/MockedList";
import {ListLayout, Header, TableLayout, Cell, HeaderCell} from "../components/StyledComponent";

const List = (props) => {
    // Props
    const {cartItems, setCartItems, setView} = props;
    
    // State variables
    const [list, setList] = useState({});

    // Effects - Here, we can do web service call to get product list.
    useEffect(() => {
        setList(productList);
    }, [])

    // Event handler
    const handleAddToCart = (cartItemProductId) => {
        setCartItems((prevCartItems)=> {
            return {...prevCartItems, [cartItemProductId]: {...list[cartItemProductId], quantity: 1}};
        });
    };

    // Render
    return (
        <ListLayout>
            <Header isSticky={true}>
                <div className="left">{i18n.shopping_title}</div>
                {Object.keys(cartItems).length > 0 && 
                    <div className="right" onClick={() => setView(VIEW.CART)}>
                        {i18n.go_to_cart} ({Object.keys(cartItems).length})
                    </div>}
            </Header>
            <TableLayout>
                <HeaderCell>{i18n.image}</HeaderCell>
                <HeaderCell>{i18n.name}</HeaderCell>
                <HeaderCell>{i18n.price}</HeaderCell>
                <HeaderCell>{i18n.action}</HeaderCell>
                {Object.values(list).map((item)=> {
                    const isAddedToCart = Boolean(cartItems[item.productId]);
                    return (
                        <Fragment key={item.productId}>
                            <Cell><img className="image" src={item.imgUrl} alt={item.name}/></Cell>
                            <Cell>{item.name}</Cell>
                            <Cell>{item.currency} {item.price}</Cell>
                            <Cell 
                                isAction={true} 
                                isAddedToCart={isAddedToCart} 
                                onClick={() => handleAddToCart(item.productId)}>
                                {isAddedToCart ? i18n.added_to_cart : i18n.add_to_cart}
                            </Cell>
                        </Fragment>
                    )
                })}
            </TableLayout>
        </ListLayout>
    )
}

export default List;