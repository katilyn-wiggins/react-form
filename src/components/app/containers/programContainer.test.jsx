import React from 'react'; 
import { render, screen } from '@testing-library/react';
import NewsHeadline from './programContainer'; 

describe(' api container test', () => {
    it('displays a bunch of news articles', async () => {
        render (<NewsHeadline />); 
    });
});