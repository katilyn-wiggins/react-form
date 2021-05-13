import React from 'react'; 
import PropTypes from 'prop-types'; 

const Controls = ({ mugName, onMugNameChange, onSubmit }) => (
    <form onSubmit={onSubmit}> 
        <label htmlFor="mug-search">Search For Any Mug!</label>
        <input 
            id="mug-name"
            type="text"
            value={mugName}
            onChange={onMugNameChange}
        />
        <button aria-label="find-mugs">Submit</button>
        </form> 
    ); 

Controls.propTypes = {
    mugName: PropTypes.string.isRequired,
    onMugNameChange: PropTypes.func.isrequired, 
    onSubmit: PropTypes.func.isRequired
}; 

export default Controls; 