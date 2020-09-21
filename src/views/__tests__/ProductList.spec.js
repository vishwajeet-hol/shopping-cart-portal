
import React from 'react';
import {render} from 'react-testing-library';
import ProductList from '../ProductList';

describe('>>> Product List',() => {

    test('renders product list', () => {
        const { getByTestId } = render(<ProductList cartItems={{}}/>);
        expect(getByTestId("productList")).toBeDefined();
    });

    test('check action column', () => {
        const { getByText } = render(<ProductList cartItems={{}}/>);
        expect(getByText("Action")).toBeDefined();
    });
})
