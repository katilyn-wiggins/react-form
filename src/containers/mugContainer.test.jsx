import React from 'react'; 
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
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

        const input = await screen.findByLabelText('Search For Any Mug!');
        userEvent.type(input, 'unicorn')

        const submitButton = await screen.findByRole('button', { name : 'find-mugs'});
        userEvent.click(submitButton); 

        const ul = await screen.findByRole('list', { name: 'mugs' })
        expect(ul).not.toBeEmptyDOMElement(); 
    });
});