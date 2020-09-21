
import React from 'react';
import {render} from 'react-testing-library';
import Cart from '../Cart';

describe('>>> Cart',() => {

    test('renders cart', () => {
        const { getByTestId, getByText } = render(<Cart cartItems={{1: {productId: '1', name: 'iPhone11'}}}/>);
        expect(getByTestId("cart")).toBeDefined();
        expect(getByText("iPhone11")).toBeDefined();
    });
})
