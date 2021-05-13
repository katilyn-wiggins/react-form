import React from 'react'; 
import { render, screen } from '@testing-library/react';
import NewsHeadline from './programContainer'; 

describe(' api container test', () => {
    it('displays a bunch of news articles', async () => {
        render (<NewsHeadline />); 

        screen.getByText('Loading...'); 

        const ul = await screen.findByRole('list', { name: 'articles' })
        expect(ul).not.toBeEmptyDOMElement(); 
    });
});