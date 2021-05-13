import React, { Component } from 'react'; 
import MugList from '../components/app/mugs/muglist';
import Controls from '../components/app/mugs/controls';
import { findMugs, findMugsByKeyword } from '../services/etsy'; 

export default class MugContainer extends Component { 
    state = {
        loading: true, 
        mugs: [], 
        mugName: '', 
    };

    componentDidMount = async() => { 
        const mugs = await findMugs(); 
        console.log(mugs); 
        this.setState({
            loading: false, 
            mugs
        }); 
    }

    handleMugNameChange = ({ target }) => {
        this.setState({ mugName: target.value })
    }; 

    handleSubmit = async (e) => {
        e.preventDefault(); 

        this.setState({ loading: true }); 
        const mugs = await findMugsByKeyword(this.state.mugName); 
        this.setState({ 
            loading: false, 
            mugs
        });
    };
    
    
    render () { 
        const { loading, mugs } = this.state; 

        if (loading) return <h1>Loading...</h1>; 

        return (
        <>
            <Controls
                mugName={this.state.mugName}
                onMugNameChange={this.handleMugNameChange}
                onSubmit={this.handleSubmit}
                />
        <MugList mugs={mugs}/>
        </>
        );
    }
}