import React, {useState, useEffect, Fragment} from 'react';
import i18n from "../i18n";
// This list will come from actual web service.
import {productList} from "../mock/MockedProductList";
import HeaderComponent from "../components/HeaderComponent";
import MultiSelectComponent from "../components/MultiSelectComponent";
import {ListLayout, TableLayout, Cell, HeaderCell} from "../components/StyledComponent";

const List = ({cartItems, setCartItems}) => {
    
    const [list, setList] = useState({});

    useEffect(() => {
        setList(productList);
    }, [])

    const handleAddToCart = (cartItemProductId) => {
        setCartItems((prevCartItems)=> {
            return {...prevCartItems, [cartItemProductId]: {...list[cartItemProductId], quantity: 1}};
        });
    };

    return (
        <ListLayout>
            <HeaderComponent cartItems={cartItems}/>
            <TableLayout>
                <HeaderCell>{i18n.image}</HeaderCell>
                <HeaderCell>{i18n.name}</HeaderCell>
                <HeaderCell>{i18n.price}</HeaderCell>
                <HeaderCell>{i18n.action}</HeaderCell>
                {Object.values(list).map((item)=> {
                    const isAddedToCart = Boolean(cartItems[item.productId]);
                    return (
                        <Fragment key={item.productId}>
                            <Cell>
                                <img className="image" src={item.imgUrl} alt={item.name}/>
                                {isAddedToCart && <MultiSelectComponent 
                                    productId={item.productId}
                                    cartItems={cartItems}
                                    setCartItems={setCartItems}
                                    style={{cellWidth: "30px", cellHeight: "25px"}}
                                />}
                            </Cell>
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