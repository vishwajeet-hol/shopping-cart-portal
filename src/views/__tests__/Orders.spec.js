
import React from 'react';
import {render} from 'react-testing-library';
import Orders from '../Orders';

describe('>>> Orders',() => {

    test('renders orders', () => {
        const { getByTestId } = render(<Orders cartItems={{}}/>);
        expect(getByTestId("orders")).toBeDefined();
    });

})
