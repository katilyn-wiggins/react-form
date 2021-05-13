import React from 'react'; 
import { render, screen } from '@testing-library/react';
import MugContainer from './mugContainer'; 
import { findMugs, findMugsByKeyword } from '../services/etsy'

const mugs  = [{
    id: 1234,
    title: 'happymug' ,
    image: 'image.url', 
    price: '2',
    link: 'mug.url',
}]

jest.mock('../services/etsy', () => ({
    findMugs : () => mugs, 
    findMugsByKeyword: () => mugs 
}))

describe(' api container test', () => {
    it('displays a bunch of mugs', async () => {
        render (<MugContainer />); 

        screen.getByText('Loading...'); 

        const ul = await screen.findByRole('list', { name: 'mugs' })
        expect(ul).not.toBeEmptyDOMElement(); 
    });
});


describe(' api container test', () => {
    it('displays a single mug', async () => {
        render (<MugContainer />); 

        screen.getByText('Loading...'); 

        const ul = await screen.findByRole('list', { name: 'mugs' })
        expect(ul).not.toBeEmptyDOMElement(); 
    });
});