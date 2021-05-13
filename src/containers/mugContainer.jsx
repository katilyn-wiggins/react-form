import React, { Component } from 'react'; 
import MugList from '../components/app/mugs/muglist';
import { findMugs } from '../services/etsy'; 

export default class MugContainer extends Component { 
    state = {
        loading: true, 
        mugs: [], 
    };

    componentDidMount = async() => { 
        const mugs = await findMugs(); 
        console.log(mugs); 
        this.setState({
            mugs,
            loading: false, 
        }); 
    }
    
    render () { 
        const { loading, mugs } = this.state; 

        if (loading) return <h1>Loading...</h1>; 

        return <MugList mugs={mugs}/>
    }
}