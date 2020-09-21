import styled from 'styled-components';

export const AppLayout = styled.div.attrs({
  className: "app-layout"
})`
  padding: 100px;
  background-color: #f1f3f6;
  min-height: 100vh;
 }
`;

export const ListLayout = styled.div.attrs({
  className: "list-layout"
})`
  background-color: #fff;
  border: 1px solid #f0f0f0;
 }
`;

export const CartLayout = styled.div.attrs({
  className: "cart-layout"
})`
  grid-column-start: 1;
  grid-column-end: ${props => props.isCartEmpty ? 11 : 7};
  background-color: #fff;
 }
`;

export const GridLayout = styled.div.attrs({
  className: "grid-layout"
})`
  border: 1px solid #f0f0f0;
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  padding-top: 20px;
 }
`;

export const EmptyCartLayout = styled.div.attrs({
  className: "empty-cart-layout"
})`
  height: 500px;
  margin: auto;
  text-align: center;
  padding-top: 250px;

  .continue-shopping {
    color: #fb641b;
    font-size: 16px;
    text-transform: uppercase;
    text-decoration: underline;
    cursor: pointer;
    padding-top: 20px;
  }
 }
`;

export const MiniCartLayout = styled.div.attrs({
  className: "mini-cart-layout"
})`
  grid-column-start: 7;
  grid-column-end: 11;
  margin-left: 20px;
  background-color: #fff;
  height: 320px;
  position: sticky;
  top: 120px;

  .mini-cart-item {
    display: flex;
    justify-content: space-between;
    padding: 20px 40px;
  }

  .bold {
    padding: 40px;
    border-top: 1px dashed #c2c2c2;
    font-weight: 700;
    border-bottom: 1px dashed #c2c2c2;
  }
 }
`;

export const Header = styled.div.attrs({
  className: "header"
})`
  font-size: 14px;
  text-transform: uppercase;
  padding: 30px 40px 30px 20px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  background-color: #fb641b;
  color: #fff;
  font-weight: 900;
  position: ${props => props.isSticky ? 'sticky' : 'static'};
  bottom: 0;
  top: 0;
  padding-left: 20px;

  .left, .right {
    cursor: pointer;
    border: 1px solid;
    padding: 5px;
  }

  .middle{
    font-size: 24px;
    cursor: pointer;
  }
 }
`;

export const SubHeader = styled.div.attrs({
  className: "sub-header"
})`
  font-size: 14px;
  text-transform: uppercase;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f0f0f0;
  background-color: #fb641b;
  color: #fff;
  font-weight: 900;
  padding-left: 20px;
  position: ${props => props.isSticky ? 'sticky' : 'static'};
  margin-top: ${props => props.marginTop || '' };
  bottom: 0;

  .right {
    cursor: pointer;
    border: 1px solid;
    padding: 5px;
  }
 }
`;

export const TableLayout = styled.div.attrs({
  className: "table-layout"
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin-top: 40px;
  
 }
`;

export const HeaderCell = styled.div.attrs({
  className: "header-cell"
})`
  font-size: 14px;
  font-weight: 800;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
 }
`;

export const MultiSelector = styled.div.attrs({
  className: "mulit-selector"
})`
  display: flex;
  padding-top: 20px;

  .minus, .plus, .current-quantity {
    border: 1px solid #c2c2c2;
    width: ${props => props.cellWidth || '35px'};
    height: ${props => props.cellHeight || '30px'};
    text-align: center;
    padding-top: 5px;
    font-weight: 400;
  }

  .current-quantity {
    width: ${props => props.cellWidth || '100px'};
    margin: 0 10px;
    font-weight: 700;
  }
}
`;

export const Cell = styled.div.attrs({
    className: "cell"
  })`
    font-size: 14px;
    font-weight: ${props => props.isAddedToCart ? '700' : '400'};
    padding: 20px;
    cursor: ${props => (!props.isAddedToCart && props.isAction) ? 'pointer' : 'default'};
    text-decoration: ${props => (!props.isAddedToCart && props.isAction) ? 'underline' : 'none'};
    border-bottom: 1px solid #f0f0f0;
    color: ${props => props.isAction ? '#388e3c' : ''};

    .image {
      width: 120px;
      height: 120px
    }
   }
  `;

export const Tile = styled.div.attrs({
  className: "tile"
})`
  font-size: 16px;
  font-weight: 800;
  padding: 20px;
  border: 1px solid #f0f0f0;
  height: 300px;

  .image {
    width: 200px;
    height: 200px;
  }

  .item-details {
    display: flex;
  }

  .item-info {
    padding: 0px 50px;
  }

  .name {
    padding-bottom: 20px;
    font-weight: 800;
  }

  .price {
    font-weight: 400;
  }

  .remove-item {
    padding-top: 50px;
    font-weight: 200;
    cursor: pointer;
    text-decoration: underline;
    color: #fb641b;
  }

  }
`;
