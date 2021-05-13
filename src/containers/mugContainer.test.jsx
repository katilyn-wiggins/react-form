import React from 'react'; 
import { render, screen } from '@testing-library/react';
import MugContainer from './mugContainer'; 

describe(' api container test', () => {
    it('displays a bunch of mugs', async () => {
        render (<MugContainer />); 

        screen.getByText('Loading...'); 

        const ul = await screen.findByRole('list', { name: 'allthemugs' })
        expect(ul).not.toBeEmptyDOMElement(); 
    });
});