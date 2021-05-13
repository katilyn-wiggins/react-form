import React from 'react';
import PropTypes from  'prop-types'; 

const Mug = ({ name, image, text }) => (
    <figure> 
        <img src={image} alt={name} /> 
        <figcaption>
            {text} - article written by {name} 
        </figcaption>
    </figure>
);

Mug.propTypes = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default Mug; 