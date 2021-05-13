import React, { Component } from 'react'; 

export default class NewsHeadline extends Component { 
    state = {
        loading: true, 
    };
    
    render () { 
        const { loading } = this.state; 

        if (loading) return <h1>Loading...</h1>; 
    }
}