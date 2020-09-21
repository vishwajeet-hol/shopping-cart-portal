
import React from 'react';
import {render} from 'react-testing-library';
import MiniCart from '../MiniCart';

describe('>>> MiniCart',() => {

    test('renders mini-cart', () => {
        const { getByTestId, getByText } = render(<MiniCart cartItems={{1: {productId: '1', name: 'iPhone11'}}}/>);
        expect(getByTestId("miniCart")).toBeDefined();
        expect(getByText("Total Amount")).toBeDefined();
    });
})
